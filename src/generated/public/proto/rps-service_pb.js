// source: public/proto/rps-service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.fr.yaro.rps.GameState', null, global);
goog.exportSymbol('proto.fr.yaro.rps.NewGameRequest', null, global);
goog.exportSymbol('proto.fr.yaro.rps.NewGameResponse', null, global);
goog.exportSymbol('proto.fr.yaro.rps.PlayTurnRequest', null, global);
goog.exportSymbol('proto.fr.yaro.rps.PlayTurnResponse', null, global);
goog.exportSymbol('proto.fr.yaro.rps.PredictionsStats', null, global);
goog.exportSymbol('proto.fr.yaro.rps.RPS', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.NewGameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.NewGameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.NewGameRequest.displayName = 'proto.fr.yaro.rps.NewGameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.NewGameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.NewGameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.NewGameResponse.displayName = 'proto.fr.yaro.rps.NewGameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.PlayTurnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.PlayTurnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.PlayTurnRequest.displayName = 'proto.fr.yaro.rps.PlayTurnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.GameState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.GameState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.GameState.displayName = 'proto.fr.yaro.rps.GameState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.PredictionsStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.PredictionsStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.PredictionsStats.displayName = 'proto.fr.yaro.rps.PredictionsStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fr.yaro.rps.PlayTurnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fr.yaro.rps.PlayTurnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fr.yaro.rps.PlayTurnResponse.displayName = 'proto.fr.yaro.rps.PlayTurnResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.NewGameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.NewGameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.NewGameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.NewGameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.NewGameRequest}
 */
proto.fr.yaro.rps.NewGameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.NewGameRequest;
  return proto.fr.yaro.rps.NewGameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.NewGameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.NewGameRequest}
 */
proto.fr.yaro.rps.NewGameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.NewGameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.NewGameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.NewGameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.NewGameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.NewGameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.NewGameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.NewGameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.NewGameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.NewGameResponse}
 */
proto.fr.yaro.rps.NewGameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.NewGameResponse;
  return proto.fr.yaro.rps.NewGameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.NewGameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.NewGameResponse}
 */
proto.fr.yaro.rps.NewGameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.NewGameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.NewGameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.NewGameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.NewGameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string gameId = 1;
 * @return {string}
 */
proto.fr.yaro.rps.NewGameResponse.prototype.getGameid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.fr.yaro.rps.NewGameResponse} returns this
 */
proto.fr.yaro.rps.NewGameResponse.prototype.setGameid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.PlayTurnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.PlayTurnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PlayTurnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rps: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.PlayTurnRequest}
 */
proto.fr.yaro.rps.PlayTurnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.PlayTurnRequest;
  return proto.fr.yaro.rps.PlayTurnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.PlayTurnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.PlayTurnRequest}
 */
proto.fr.yaro.rps.PlayTurnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameid(value);
      break;
    case 2:
      var value = /** @type {!proto.fr.yaro.rps.RPS} */ (reader.readEnum());
      msg.setRps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.PlayTurnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.PlayTurnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PlayTurnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRps();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string gameId = 1;
 * @return {string}
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.getGameid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.fr.yaro.rps.PlayTurnRequest} returns this
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.setGameid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RPS rps = 2;
 * @return {!proto.fr.yaro.rps.RPS}
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.getRps = function() {
  return /** @type {!proto.fr.yaro.rps.RPS} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.fr.yaro.rps.RPS} value
 * @return {!proto.fr.yaro.rps.PlayTurnRequest} returns this
 */
proto.fr.yaro.rps.PlayTurnRequest.prototype.setRps = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.GameState.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.GameState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.GameState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.GameState.toObject = function(includeInstance, msg) {
  var f, obj = {
    humanscore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    aiscore: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.GameState}
 */
proto.fr.yaro.rps.GameState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.GameState;
  return proto.fr.yaro.rps.GameState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.GameState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.GameState}
 */
proto.fr.yaro.rps.GameState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHumanscore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAiscore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.GameState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.GameState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.GameState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.GameState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHumanscore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAiscore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 humanScore = 1;
 * @return {number}
 */
proto.fr.yaro.rps.GameState.prototype.getHumanscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.fr.yaro.rps.GameState} returns this
 */
proto.fr.yaro.rps.GameState.prototype.setHumanscore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 aiScore = 2;
 * @return {number}
 */
proto.fr.yaro.rps.GameState.prototype.getAiscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.fr.yaro.rps.GameState} returns this
 */
proto.fr.yaro.rps.GameState.prototype.setAiscore = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.PredictionsStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.PredictionsStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PredictionsStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictedrock: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    predictedpaper: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    predictedscissors: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    predictiontree: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.PredictionsStats}
 */
proto.fr.yaro.rps.PredictionsStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.PredictionsStats;
  return proto.fr.yaro.rps.PredictionsStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.PredictionsStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.PredictionsStats}
 */
proto.fr.yaro.rps.PredictionsStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPredictedrock(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPredictedpaper(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPredictedscissors(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictiontree(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.PredictionsStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.PredictionsStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PredictionsStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredictedrock();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPredictedpaper();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getPredictedscissors();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPredictiontree();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional double predictedRock = 1;
 * @return {number}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.getPredictedrock = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.fr.yaro.rps.PredictionsStats} returns this
 */
proto.fr.yaro.rps.PredictionsStats.prototype.setPredictedrock = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double predictedPaper = 2;
 * @return {number}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.getPredictedpaper = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.fr.yaro.rps.PredictionsStats} returns this
 */
proto.fr.yaro.rps.PredictionsStats.prototype.setPredictedpaper = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double predictedScissors = 3;
 * @return {number}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.getPredictedscissors = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.fr.yaro.rps.PredictionsStats} returns this
 */
proto.fr.yaro.rps.PredictionsStats.prototype.setPredictedscissors = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string predictionTree = 4;
 * @return {string}
 */
proto.fr.yaro.rps.PredictionsStats.prototype.getPredictiontree = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.fr.yaro.rps.PredictionsStats} returns this
 */
proto.fr.yaro.rps.PredictionsStats.prototype.setPredictiontree = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.fr.yaro.rps.PlayTurnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fr.yaro.rps.PlayTurnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PlayTurnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newstate: (f = msg.getNewstate()) && proto.fr.yaro.rps.GameState.toObject(includeInstance, f),
    stats: (f = msg.getStats()) && proto.fr.yaro.rps.PredictionsStats.toObject(includeInstance, f),
    airps: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fr.yaro.rps.PlayTurnResponse}
 */
proto.fr.yaro.rps.PlayTurnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fr.yaro.rps.PlayTurnResponse;
  return proto.fr.yaro.rps.PlayTurnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fr.yaro.rps.PlayTurnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fr.yaro.rps.PlayTurnResponse}
 */
proto.fr.yaro.rps.PlayTurnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameid(value);
      break;
    case 2:
      var value = new proto.fr.yaro.rps.GameState;
      reader.readMessage(value,proto.fr.yaro.rps.GameState.deserializeBinaryFromReader);
      msg.setNewstate(value);
      break;
    case 3:
      var value = new proto.fr.yaro.rps.PredictionsStats;
      reader.readMessage(value,proto.fr.yaro.rps.PredictionsStats.deserializeBinaryFromReader);
      msg.setStats(value);
      break;
    case 4:
      var value = /** @type {!proto.fr.yaro.rps.RPS} */ (reader.readEnum());
      msg.setAirps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fr.yaro.rps.PlayTurnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fr.yaro.rps.PlayTurnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fr.yaro.rps.PlayTurnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewstate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.fr.yaro.rps.GameState.serializeBinaryToWriter
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.fr.yaro.rps.PredictionsStats.serializeBinaryToWriter
    );
  }
  f = message.getAirps();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string gameId = 1;
 * @return {string}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.getGameid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.setGameid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GameState newState = 2;
 * @return {?proto.fr.yaro.rps.GameState}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.getNewstate = function() {
  return /** @type{?proto.fr.yaro.rps.GameState} */ (
    jspb.Message.getWrapperField(this, proto.fr.yaro.rps.GameState, 2));
};


/**
 * @param {?proto.fr.yaro.rps.GameState|undefined} value
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
*/
proto.fr.yaro.rps.PlayTurnResponse.prototype.setNewstate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.clearNewstate = function() {
  return this.setNewstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.hasNewstate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionsStats stats = 3;
 * @return {?proto.fr.yaro.rps.PredictionsStats}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.getStats = function() {
  return /** @type{?proto.fr.yaro.rps.PredictionsStats} */ (
    jspb.Message.getWrapperField(this, proto.fr.yaro.rps.PredictionsStats, 3));
};


/**
 * @param {?proto.fr.yaro.rps.PredictionsStats|undefined} value
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
*/
proto.fr.yaro.rps.PlayTurnResponse.prototype.setStats = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.clearStats = function() {
  return this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.hasStats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RPS aiRps = 4;
 * @return {!proto.fr.yaro.rps.RPS}
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.getAirps = function() {
  return /** @type {!proto.fr.yaro.rps.RPS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.fr.yaro.rps.RPS} value
 * @return {!proto.fr.yaro.rps.PlayTurnResponse} returns this
 */
proto.fr.yaro.rps.PlayTurnResponse.prototype.setAirps = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.fr.yaro.rps.RPS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
};

goog.object.extend(exports, proto.fr.yaro.rps);
