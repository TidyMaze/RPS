import com.google.inject.AbstractModule
import fr.yaro.rps.RPSService

class Module extends AbstractModule {
  override def configure(): Unit = {
    bind(classOf[GrpcService]).asEagerSingleton()
    bind(classOf[RPSService]).to(classOf[RPSServiceImpl])
  }
}
