# RPS
*A brand new website to play (and lose) against all-mighty AI!*

You can find the link here: [https://tinyurl.com/try-rps](https://tinyurl.com/try-rps)

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
