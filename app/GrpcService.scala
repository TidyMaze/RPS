import akka.actor.ActorSystem
import akka.grpc.scaladsl.WebHandler
import akka.http.scaladsl.{Http, HttpConnectionContext}
import fr.yaro.rps.{RPSService, RPSServiceHandler}

import javax.inject.Inject

class GrpcService @Inject () (rpsService: RPSService) (implicit actorSystem: ActorSystem) {

  private val rpsServiceHandler = RPSServiceHandler.partial(rpsService)
  private val grpcWebServiceHandlers = WebHandler.grpcWebHandler(rpsServiceHandler)

  Http()
    .bindAndHandleAsync(
      grpcWebServiceHandlers,
      interface = "0.0.0.0",
      port = 8081,
      connectionContext = HttpConnectionContext())
}
