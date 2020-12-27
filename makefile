all: build-prod deploy

build-prod: gen-client-grpc webpack-prod docker-stage

run-local-docker: build-prod docker-local-publish docker-run

run-local-host: gen-client-grpc webpack-dev sbt-start

sbt-start:
	sbt ~start

gen-client-grpc:
	protoc ./public/proto/rps-service.proto \
        --js_out=import_style=commonjs:./src/generated \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated

webpack-prod:
	webpack --config webpack.prod.js

webpack-dev:
	webpack --config webpack.dev.js &

docker-stage:
	sbt "docker:stage"

docker-local-publish:
	sbt "docker:publishLocal"

deploy:
	cp app.yaml target/docker/stage/
	cd target/docker/stage/ && gcloud app deploy --stop-previous-version --promote

docker-run:
	docker run -e APPLICATION_SECRET=MySuperSecretKey -p 8080:8080 rps:0.1.0-SNAPSHOT

