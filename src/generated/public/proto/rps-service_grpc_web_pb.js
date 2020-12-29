/**
 * @fileoverview gRPC-Web generated client stub for fr.yaro.rps
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.fr = {};
proto.fr.yaro = {};
proto.fr.yaro.rps = require('./rps-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fr.yaro.rps.RPSServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fr.yaro.rps.RPSServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fr.yaro.rps.NewGameRequest,
 *   !proto.fr.yaro.rps.NewGameResponse>}
 */
const methodDescriptor_RPSService_CreateNewGame = new grpc.web.MethodDescriptor(
  '/fr.yaro.rps.RPSService/CreateNewGame',
  grpc.web.MethodType.UNARY,
  proto.fr.yaro.rps.NewGameRequest,
  proto.fr.yaro.rps.NewGameResponse,
  /**
   * @param {!proto.fr.yaro.rps.NewGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fr.yaro.rps.NewGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fr.yaro.rps.NewGameRequest,
 *   !proto.fr.yaro.rps.NewGameResponse>}
 */
const methodInfo_RPSService_CreateNewGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fr.yaro.rps.NewGameResponse,
  /**
   * @param {!proto.fr.yaro.rps.NewGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fr.yaro.rps.NewGameResponse.deserializeBinary
);


/**
 * @param {!proto.fr.yaro.rps.NewGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fr.yaro.rps.NewGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fr.yaro.rps.NewGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fr.yaro.rps.RPSServiceClient.prototype.createNewGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fr.yaro.rps.RPSService/CreateNewGame',
      request,
      metadata || {},
      methodDescriptor_RPSService_CreateNewGame,
      callback);
};


/**
 * @param {!proto.fr.yaro.rps.NewGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fr.yaro.rps.NewGameResponse>}
 *     Promise that resolves to the response
 */
proto.fr.yaro.rps.RPSServicePromiseClient.prototype.createNewGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fr.yaro.rps.RPSService/CreateNewGame',
      request,
      metadata || {},
      methodDescriptor_RPSService_CreateNewGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fr.yaro.rps.PlayTurnRequest,
 *   !proto.fr.yaro.rps.PlayTurnResponse>}
 */
const methodDescriptor_RPSService_PlayTurn = new grpc.web.MethodDescriptor(
  '/fr.yaro.rps.RPSService/PlayTurn',
  grpc.web.MethodType.UNARY,
  proto.fr.yaro.rps.PlayTurnRequest,
  proto.fr.yaro.rps.PlayTurnResponse,
  /**
   * @param {!proto.fr.yaro.rps.PlayTurnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fr.yaro.rps.PlayTurnResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fr.yaro.rps.PlayTurnRequest,
 *   !proto.fr.yaro.rps.PlayTurnResponse>}
 */
const methodInfo_RPSService_PlayTurn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fr.yaro.rps.PlayTurnResponse,
  /**
   * @param {!proto.fr.yaro.rps.PlayTurnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fr.yaro.rps.PlayTurnResponse.deserializeBinary
);


/**
 * @param {!proto.fr.yaro.rps.PlayTurnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fr.yaro.rps.PlayTurnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fr.yaro.rps.PlayTurnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fr.yaro.rps.RPSServiceClient.prototype.playTurn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fr.yaro.rps.RPSService/PlayTurn',
      request,
      metadata || {},
      methodDescriptor_RPSService_PlayTurn,
      callback);
};


/**
 * @param {!proto.fr.yaro.rps.PlayTurnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fr.yaro.rps.PlayTurnResponse>}
 *     Promise that resolves to the response
 */
proto.fr.yaro.rps.RPSServicePromiseClient.prototype.playTurn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fr.yaro.rps.RPSService/PlayTurn',
      request,
      metadata || {},
      methodDescriptor_RPSService_PlayTurn);
};


module.exports = proto.fr.yaro.rps;

