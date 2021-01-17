package rps

import cats.effect.IO
import rps.App.{Node, beating, predictNext, random, randomRPS, showNode}
import scalax.collection.mutable.Graph
import scalax.collection.edge.WDiEdge
import scalax.collection.io.dot.implicits._
import scalax.collection.io.dot.{DotAttr, DotEdgeStmt, DotRootGraph, _}

object RPSEngine {

  private def exportDot(g: Graph[Node, WDiEdge]): String = {
    val root = DotRootGraph(directed = true, Some("RPS"))

    val dot = g.toDot(
      root,
      innerEdge => innerEdge.edge match {
        case WDiEdge(source, target, weight) =>
          Some((root, DotEdgeStmt(showNode(source.toOuter), showNode(target.toOuter), Seq(DotAttr("penwidth", weight), DotAttr("label", weight)))))
      })
    dot
  }

  def simplify(g: Graph[Node, WDiEdge]): Graph[Node, WDiEdge] = g

  def buildAndPredict(state: GameState, windowSize: Int, minSample: Int, rps: RPS): IO[(RPS, Int, Int, String)] = {
    val g= buildGraphFromHistory(state, windowSize)

    val simplifiedGraph = simplify(g)

    val dot: String = exportDot(simplifiedGraph)

    for {
      picked <- predictNext(g, windowSize, minSample, state.game).map {
        case ((rps, probability), samples, historySize) =>
          IO.pure(beating(rps))
      }.getOrElse(randomRPS(random))

      updatedPlayerScore = state.playerScore + (if (rps == beating(picked)) 1 else 0)
      updatedAiScore = state.aiScore + (if (picked == beating(rps)) 1 else 0)

    } yield (picked, updatedPlayerScore, updatedAiScore, dot)
  }

  private def buildGraphFromHistory(state: GameState, windowSize: Int): Graph[Node, WDiEdge] = {
    val edges =
      (1 to windowSize)
        .view
        .flatMap(state.game.sliding)
        .groupMapReduce(identity)(_ => 1)(_ + _)
        .map { case (s, size) => WDiEdge(s.init, s)(size) }
        .toList

    Graph[Node, WDiEdge](edges: _*)
  }
}

sealed trait RPS extends Product with Serializable

case object R extends RPS

case object P extends RPS

case object S extends RPS

object RPS {
  val allRPS = List(R, P, S)
}

case class GameState(game: Seq[RPS], playerScore: Int, aiScore: Int)
