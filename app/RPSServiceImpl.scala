import fr.yaro.rps._

import java.util.UUID
import java.util.concurrent.{ConcurrentHashMap, ConcurrentMap}
import scala.concurrent.Future

class RPSServiceImpl extends RPSService {
  val games = new ConcurrentHashMap[UUID, GameState]

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
      games.put(gameId, GameState(0,0))
    }

    val state = games.get(gameId)

    val predictionsStats = PredictionsStats(0, 0, 0, "empty tree")
    val response = PlayTurnResponse(in.gameId, Some(state), Some(predictionsStats))
    Future.successful(response)
  }
}
