import fr.yaro.rps._

import java.util.UUID
import scala.concurrent.Future

class RPSServiceImpl extends RPSService {
  override def createNewGame(in: NewGameRequest): Future[NewGameResponse] = {
    val generatedGameId = UUID.randomUUID()
    val response = NewGameResponse(generatedGameId.toString)
    Future.successful(response)
  }

  override def playTurn(in: PlayTurnRequest): Future[PlayTurnResponse] = {
    println("Played " + in.rps)
    val gameState = GameState(10, 5)
    val predictionsStats = PredictionsStats(50, 40, 10, "empty tree")
    val response = PlayTurnResponse(in.gameId, Some(gameState), Some(predictionsStats))
    Future.successful(response)
  }
}
