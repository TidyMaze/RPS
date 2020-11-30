name := "RPS"
organization := "com.yaro"

lazy val engine = project.in(file("engine"))
  .settings(
    scalaVersion := "2.13.4",
    libraryDependencies ++= Seq(
      "org.scala-graph" %% "graph-core" % "1.13.2",
      "org.scala-graph" %% "graph-dot" % "1.13.0",
      "org.typelevel" %% "cats-effect" % "2.3.0"
    )
  )

lazy val root = project.in(file("."))
  .enablePlugins(PlayScala)
  .settings(
    mainClass in (Compile, run) := Some("rps.App"),
    scalaVersion := "2.13.4",
    name := "rps-app",
    libraryDependencies ++= Seq(guice, "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test)
  )
  .aggregate(engine)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.yaro.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.yaro.binders._"
