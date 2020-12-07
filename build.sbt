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
    PB.protoSources in Compile += file("public/proto")
  )
  .dependsOn(engine)
  .aggregate(engine)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.yaro.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.yaro.binders._"
