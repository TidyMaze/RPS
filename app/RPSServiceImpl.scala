import fr.yaro.rps.RPS.{PAPER, ROCK, SCISSORS}
import fr.yaro.rps.{NewGameRequest, NewGameResponse, PlayTurnRequest, PlayTurnResponse, PredictionsStats, RPSService}
import rps.{GameState, P, R, RPS, RPSEngine, S}

import java.util.UUID
import java.util.concurrent.{ConcurrentHashMap, ConcurrentMap}
import scala.concurrent.Future

class RPSServiceImpl extends RPSService {
  val games = new ConcurrentHashMap[UUID, rps.GameState]

  def fromProto(rps: fr.yaro.rps.RPS): RPS = rps match {
    case ROCK => R
    case PAPER => P
    case SCISSORS => S
  }

  def toProto(rps: RPS): fr.yaro.rps.RPS = rps match {
    case R => ROCK
    case P => PAPER
    case S => SCISSORS
  }

  override def createNewGame(in: NewGameRequest): Future[NewGameResponse] = {
    val generatedGameId = UUID.randomUUID()
    val response = NewGameResponse(generatedGameId.toString)
    Future.successful(response)
  }

  override def playTurn(in: PlayTurnRequest): Future[PlayTurnResponse] = {
    val gameId = UUID.fromString(in.gameId)

    def logGame(raw: Any) = println(s"Game ${in.gameId}: $raw")

    logGame(s"Played ${in.rps}")

    val stored = games.get(gameId)
    if(stored == null){
      logGame(s"creating new game for $gameId")
      games.put(gameId, GameState(Seq.empty[RPS],0,0))
    }

    val state = games.get(gameId)
    val humanRps = fromProto(in.rps)
    val windowSize = state.game.length
    val (picked, updatedPlayerScore, updatedAiScore, dot) = RPSEngine.buildAndPredict(state, windowSize, 3, humanRps).unsafeRunSync()

    val resStateProto = fr.yaro.rps.GameState(updatedPlayerScore, updatedAiScore)
    val predictionsStats = PredictionsStats(0, 0, 0, dot)
    val pickedProto = toProto(picked)
    val response = PlayTurnResponse(in.gameId, Some(resStateProto), Some(predictionsStats), pickedProto)

    games.put(gameId, state.copy(game = (state.game :+ humanRps).takeRight(30), updatedPlayerScore, updatedAiScore))

    Future.successful(response)
  }
}
