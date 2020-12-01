package rps

import cats.effect.{ExitCode, IO, IOApp}
import scalax.collection.Graph
import scalax.collection.GraphPredef._
import scalax.collection.GraphEdge._
import scalax.collection.edge.Implicits._
import scalax.collection.edge.WDiEdge
import scalax.collection.io.dot._
import implicits._
import rps.App.buildGraph

import cats.implicits._

import scala.io.StdIn
import scala.util.Random

sealed trait RPS extends Product with Serializable

case object R extends RPS

case object P extends RPS

case object S extends RPS

object RPS {
  val allRPS = List(R, P, S)
}

case class GameState(game: Seq[RPS], playerScore: Int, aiScore: Int)

object App extends IOApp {
  type Node = Seq[RPS]

  val random = new Random

  def randomRPS(rand: Random): IO[RPS] =
    IO {
      rand.nextInt(RPS.allRPS.length)
    }.map(RPS.allRPS(_))

  def randomGame(rand: Random, size: Int): IO[List[RPS]] =
    (0 to size).toList.map { _ =>
      randomRPS(rand)
    }.sequence


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

    for {
      g <- buildGraph(state.game, windowSize)

      predicted = predictNext(g, windowSize, minSample, state.game)

      picked <- predicted.map {
        case ((rps, probability), samples, historySize) =>
          IO {
            println(s"$rps\t(P=${probability * 100}%, S=${samples.toInt}, H=${historySize.toInt})")
          } *> IO.pure(beating(rps))
      }.getOrElse(randomRPS(random))

      rps <- askRPS()

      updatedPlayerScore = state.playerScore + (if(rps == beating(picked)) 1 else 0)
      updatedAiScore = state.aiScore + (if(picked == beating(rps)) 1 else 0)

      _ <- IO {
        println(s"You played $rps, I played $picked\t human: $updatedPlayerScore - ai: $updatedAiScore")
      }

      res <- playTurn(state.copy(game = (state.game :+ rps).takeRight(50), playerScore = updatedPlayerScore, aiScore = updatedAiScore), minSample)
    } yield res
  }

  def run(args: List[String]): IO[ExitCode] = playTurn(GameState(Seq(), 0, 0), 3) *> IO.pure(ExitCode.Success)

  private def buildGraph(game: Seq[RPS], windowSize: Int): IO[Graph[Node, WDiEdge]] = {
    val edges =
      (1 to windowSize)
        .view
        .flatMap(game.sliding)
        .groupMapReduce(identity)(_.size)(_ + _)
        .map { case (s, size) => WDiEdge(s.init, s)(size) }
        .toList

    println("edges " + edges.size)

    val g = Graph[Node, WDiEdge](edges: _*)

//    val root = DotRootGraph(directed = true, Some("RPS"))

//    val dot = g.toDot(
//      root,
//      innerEdge => innerEdge.edge match {
//        case WDiEdge(source, target, weight) =>
//          Some((root, DotEdgeStmt(showNode(source.toOuter), showNode(target.toOuter), Seq(DotAttr("penwidth", weight), DotAttr("label", weight)))))
//      })

    //    for {
    //      _ <- IO { println(dot) }
    //    } yield g

    IO.pure(g)
  }
}
