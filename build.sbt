import sbt.Keys.mainClass

name := "RPS"
organization := "com.yaro"

lazy val engine = project.in(file("engine"))
  .settings(
    scalaVersion := "2.13.4",
    libraryDependencies ++= Seq(
      "org.scala-graph" %% "graph-core" % "1.13.2",
      "org.scala-graph" %% "graph-dot" % "1.13.0",
      "org.typelevel" %% "cats-effect" % "2.3.0"
    ),
    mainClass in(Compile, run) := Some("rps.App")
  )

lazy val root = project.in(file("."))
  .enablePlugins(PlayScala, AkkaGrpcPlugin)
  .settings(
    scalaVersion := "2.13.4",
    name := "rps-app",
    libraryDependencies ++= Seq(guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.3" % Test,
      "ch.megard" %% "akka-http-cors" % "0.4.2"
    ),
    PB.protoSources in Compile += file("public/proto"),
    dockerExposedPorts ++= Seq(8080),
    daemonUser in Docker := "rps"
  )
  .dependsOn(engine)
  .aggregate(engine)

javaOptions in Universal ++= Seq(
  "-Dpidfile.path=/dev/null"
)

watchTriggers ++= Seq(
  baseDirectory.value.toGlob / "public" / **,
  baseDirectory.value.toGlob / ** / "*.scala"
)
//watchBeforeCommand := { () =>
//  FileTreeView.default.list(baseDirectory.value.toGlob / "public" / **).foreach {
//    case (p, _) => println(p)
//  }
//  println("watch before")
//}
