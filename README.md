# RPS
*A brand new website to play (and lose) against all-mighty AI!*

[You can find the link here](https://rock-paper-scissors-ai.ew.r.appspot.com/)

## Run it by yourself 

To build, publish docker images and run it locally:
```shell
make run-local
```

## Techs

This project uses many things:
- Vue.js for frontent
- Webpack as bundler + minifier
- grpc-web as the exchange protocol between front and back (both generated [from protobuf](public/proto/rps-service.proto))
- Scala with play (but actually using Akka HTTP for grpc-web ...) *// TODO: remove play*
- docker to wrap it up
