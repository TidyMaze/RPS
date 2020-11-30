name := "RPS"
version := "0.1"

scalaVersion := "2.13.4"

lazy val app = (project in file("."))
  .settings(
    mainClass in assembly := Some("rps.App"),
    assemblyJarName in assembly := "RPS.jar"
  )
  .settings(
    libraryDependencies ++= Seq(
      "org.scala-graph" %% "graph-core" % "1.13.2",
      "org.scala-graph" %% "graph-dot" % "1.13.0",
      "org.typelevel" %% "cats-effect" % "2.3.0"
    )
  )
