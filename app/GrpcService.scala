import akka.actor.ActorSystem
import akka.grpc.scaladsl.WebHandler
import akka.http.scaladsl.model.{HttpRequest, HttpResponse}
import akka.http.scaladsl.{Http, HttpConnectionContext}
import fr.yaro.rps.{RPSService, RPSServiceHandler}

import javax.inject.Inject
import scala.concurrent.Future

class GrpcService @Inject () (rpsService: RPSService) (implicit actorSystem: ActorSystem) {

  private val rpsServiceHandler = RPSServiceHandler.partial(rpsService)
  val grpcWebServiceHandlers = WebHandler.grpcWebHandler(rpsServiceHandler)

  Http()
    .bindAndHandleAsync(
      grpcWebServiceHandlers,
      interface = "127.0.0.1",
      port = 8080,
      connectionContext = HttpConnectionContext())
}
