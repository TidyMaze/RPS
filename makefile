all: build-prod deploy

build-prod: gen-client-grpc webpack-prod docker-stage docker-local-publish

gen-client-grpc:
	protoc ./public/proto/rps-service.proto \
        --js_out=import_style=commonjs:./src/generated \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated

webpack-prod:
	webpack --config webpack.prod.js

docker-stage:
	sbt "docker:stage"

docker-local-publish:
	sbt "docker:publishLocal"

deploy:
	cp app.yaml target/docker/stage/
	cd target/docker/stage/ && gcloud app deploy

#docker-run:
#	docker run -e APPLICATION_SECRET=MySuperSecretKey -p 9000:9000 -p 8080:8080 rps:0.1.0-SNAPSHOT
