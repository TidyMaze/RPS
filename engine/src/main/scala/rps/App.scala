package rps

import cats.effect.{ExitCode, IO, IOApp}
import scalax.collection.mutable.Graph
import scalax.collection.edge.WDiEdge
import cats.implicits._
import rps.RPSEngine.buildAndPredict

import scala.io.StdIn
import scala.util.Random

object App extends IOApp {
  type Node = Seq[RPS]

  val random = new Random

  def randomRPS(rand: Random): IO[RPS] =
    IO {
      rand.nextInt(RPS.allRPS.length)
    }.map(RPS.allRPS(_))

//  def randomGame(rand: Random, size: Int): IO[List[RPS]] =
//    (0 to size).toList.map { _ =>
//      randomRPS(rand)
//    }.sequence


  def showNode(n: Node) = n match {
    case Nil => "Root"
    case other => other.mkString(",")
  }

  def predict(g: Graph[Node, WDiEdge], history: Seq[RPS]) =
    g.find(history)
      .flatMap { node =>
        val outEdges = node.edges.filter(e => e.from.toOuter == history)
        val total = outEdges.foldLeft(0.0)((acc, cur) => acc + cur.weight)
        val allPredictions = outEdges.map(e => {
          val target = e.target.toOuter.last
          val weight = e.weight
          target -> (weight / total)
        }).toMap

        allPredictions.maxByOption(_._2).map(best => (best, total))
      }

  def predictNext(g: Graph[Node, WDiEdge], historySize: Int, minSample: Int, game: Seq[RPS]): Option[((RPS, Double), Double, Int)] = {
    predict(g, game.takeRight(historySize)) match {
      case Some((best, samples)) if samples >= minSample => Some((best, samples, historySize))
      case _ if historySize > 0 => predictNext(g, historySize - 1, minSample, game)
      case _ => None
    }
  }

  def parseRPS(raw: String): Option[RPS] = raw match {
    case "R" => Some(R)
    case "P" => Some(P)
    case "S" => Some(S)
    case "r" => Some(R)
    case "p" => Some(P)
    case "s" => Some(S)
    case _ => None
  }

  def askRPS(): IO[RPS] = for {
    _ <- IO {
      print("Next? (R|P|S): ")
    }
    line <- IO {
      StdIn.readLine()
    }
    parsed <- parseRPS(line) match {
      case Some(rps) => IO.pure(rps)
      case None => askRPS()
    }
  } yield parsed

  def beating(rps: RPS): RPS = rps match {
    case R => P
    case P => S
    case S => R
  }

  def playTurn(state: GameState, minSample: Int): IO[Unit] = {
    val windowSize = state.game.length

    (for {
      rps <- askRPS()

      resPredicted <- buildAndPredict(state, windowSize, minSample, rps)
      (picked, updatedPlayerScore, updatedAiScore, dot) = resPredicted

      _ <- IO {
        println(s"You played $rps, I played $picked\t human: $updatedPlayerScore - ai: $updatedAiScore")
      }
    } yield (updatedPlayerScore, updatedAiScore, rps)).flatMap {
      case (updatedPlayerScore, updatedAiScore, rps) => playTurn(state.copy(game = (state.game :+ rps).takeRight(30), playerScore = updatedPlayerScore, aiScore = updatedAiScore), minSample)
    }
  }

  def run(args: List[String]): IO[ExitCode] = playTurn(GameState(Seq(), 0, 0), 3) *> IO.pure(ExitCode.Success)
}
