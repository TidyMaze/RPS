package rps

import cats.effect.IO
import rps.App.{Node, beating, predictNext, random, randomRPS, showNode}
import scalax.collection.Graph
import scalax.collection.edge.WDiEdge
import scalax.collection.io.dot.{DotAttr, DotEdgeStmt, DotRootGraph}
import cats.effect.{ExitCode, IO, IOApp}
import scalax.collection.Graph
import scalax.collection.GraphPredef._
import scalax.collection.GraphEdge._
import scalax.collection.edge.Implicits.{+, _}
import scalax.collection.edge.WDiEdge
import scalax.collection.io.dot._
import implicits._
import rps.App.{Node, beating, predictNext, random, randomRPS, showNode}
import cats.implicits._
import rps.RPSEngine.buildAndPredict

import scala.io.StdIn
import scala.util.Random

object RPSEngine {
  def buildGraph(game: Seq[RPS], windowSize: Int): (Graph[Node, WDiEdge], String) = {
    val edges =
      (1 to windowSize)
        .view
        .flatMap(game.sliding)
        .groupMapReduce(identity)(_ => 1)(_ + _)
        .map { case (s, size) => WDiEdge(s.init, s)(size) }
        .toList

    val g = Graph[Node, WDiEdge](edges: _*)

    val root = DotRootGraph(directed = true, Some("RPS"))

    val dot = g.toDot(
      root,
      innerEdge => innerEdge.edge match {
        case WDiEdge(source, target, weight) =>
          Some((root, DotEdgeStmt(showNode(source.toOuter), showNode(target.toOuter), Seq(DotAttr("penwidth", weight), DotAttr("label", weight)))))
      })

    (g, dot)
  }

  def buildAndPredict(state: GameState, windowSize: Int, minSample: Int, rps: RPS): IO[(RPS, Int, Int, String)] = {
    val (g, dot) = buildGraph(state.game, windowSize)

    for {
      picked <- predictNext(g, windowSize, minSample, state.game).map {
        case ((rps, probability), samples, historySize) =>
          IO.pure(beating(rps))
      }.getOrElse(randomRPS(random))

      updatedPlayerScore = state.playerScore + (if (rps == beating(picked)) 1 else 0)
      updatedAiScore = state.aiScore + (if (picked == beating(rps)) 1 else 0)

    } yield (picked, updatedPlayerScore, updatedAiScore, dot)
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
