import akka.Done
import akka.actor.{ActorSystem, CoordinatedShutdown}
import akka.grpc.scaladsl.WebHandler
import akka.http.scaladsl.{Http, HttpConnectionContext}
import fr.yaro.rps.{RPSService, RPSServiceHandler}
import akka.http.scaladsl.model._
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.{Route, RouteResult}
import play.api.routing.Router

import javax.inject.Inject
import scala.concurrent.{ExecutionContext, Future}
import scala.concurrent.duration._
import scala.language.postfixOps

class GrpcService @Inject()(rpsService: RPSService)(implicit actorSystem: ActorSystem, ec: ExecutionContext) {

  private val rpsServiceHandler = RPSServiceHandler.partial(rpsService)
  private val grpcWebServiceHandlers = WebHandler.grpcWebHandler(rpsServiceHandler)

  val routes: Route = concat(
    path("favicon.png") {
      getFromFile("public/images/favicon.png")
    },
    path("hello") {
      get {
        complete("Hello")
      }
    },
    pathEndOrSingleSlash {
      getFromFile("public/main.html")
    },
    pathPrefix("fr.yaro.rps.RPSService") {
      ctx => grpcWebServiceHandlers(ctx.request).map(RouteResult.Complete)
    },
    pathPrefix("assets") {
      getFromDirectory("/public")
    },
    request => {
      println("Not found request " + request.unmatchedPath)
      Future.successful(RouteResult.Complete(HttpResponse(404, entity = "Unknown resource :/ !")))
    },
  )

  Http()
    .bindAndHandleAsync(
      Route.asyncHandler(routes),
      interface = "0.0.0.0",
      port = 8081,
      connectionContext = HttpConnectionContext())
    .map(binding => {
      println("Akka http server started")
      CoordinatedShutdown(actorSystem).addTask(CoordinatedShutdown.PhaseBeforeServiceUnbind, "Stop GRPC") { () =>
        println("Stopping akka http server ...")
        binding.terminate(2 seconds)
          .map(_ => {
            println("Terminated akka http server")
            Done
          })
      }
    })
}
