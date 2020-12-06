import fr.yaro.rps.{GameState, NewGameRequest, NewGameResponse, PlayTurnRequest, PlayTurnResponse, PredictionsStats, RPSService}

import scala.concurrent.Future

class RPSServiceImpl extends RPSService {
  override def createNewGame(in: NewGameRequest): Future[NewGameResponse] = Future.successful(NewGameResponse("gameId"))

  override def playTurn(in: PlayTurnRequest): Future[PlayTurnResponse] = Future.successful(PlayTurnResponse(
    in.gameId, Some(GameState(10, 5)), Some(PredictionsStats(
      50, 40, 10, "empty tree"
    ))
  ))
}
