package tuto

import scalax.collection.Graph
import scalax.collection.GraphPredef._
import scalax.collection.GraphEdge._
import scalax.collection.edge.Implicits._
import scalax.collection.edge.WDiEdge
import scalax.collection.io.dot._
import implicits._

import scala.util.Random

sealed trait RPS extends Product with Serializable

case object R extends RPS

case object P extends RPS

case object S extends RPS

object RPS {
  val allRPS = List(R, P, S)
}

object App {
  type Node = Seq[RPS]

  val random = new Random

  def randomGame(size: Int) = (0 to size).map(_ =>
    RPS.allRPS(random.nextInt(RPS.allRPS.length))
  )


  def showNode(n: Node) = n match {
    case Nil => "Root"
    case other => other.mkString(",")
  }

  def predict(g: Graph[Node, WDiEdge], history: Seq[RPS]) =
    g.find(history)
      .flatMap { node =>
        val outEdges = node.edges.filter(e => e.from.toOuter == history)
        val total = outEdges.toList.map(_.weight).sum
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
      case None if historySize == 0 => None
      case _ => predictNext(g, historySize - 1, minSample, game)
    }
  }

  def main(args: Array[String]): Unit = {
    val game = randomGame(50)

    val windowSize = math.min(4, game.length)

    println(game)

    val slides = (1 to windowSize).flatMap { size =>
      game.sliding(size).toSeq
    }

    println(slides)

    val subseqs = slides.map(ss => (ss.init, ss))

    println(subseqs)

    val edgesGrouped = subseqs.groupBy(identity).map {
      case ((s, t), es) => WDiEdge(s, t)(es.length)
    }.toList

    val g = Graph[Node, WDiEdge](edgesGrouped: _*)

    println(g)

    val root = DotRootGraph(directed = true, Some("RPS"))

    def transformer(innerEdge: Graph[Node, WDiEdge]#EdgeT) = innerEdge.edge match {
      case WDiEdge(source, target, weight) =>
        Some((root, DotEdgeStmt(showNode(source.toOuter), showNode(target.toOuter), Seq(DotAttr("penwidth", weight), DotAttr("label", weight)))))
    }

    val dot = g.toDot(root, transformer)
    println(dot)

    val res = predictNext(g, windowSize, 5, game).map {
      case ((rps, probability), samples, historySize) => s"Going to play $rps (${probability * 100}%) with ${samples.toInt} samples and history size of ${historySize.toInt}"
    }.getOrElse("No prediction :/")

    println(res)
  }
}
