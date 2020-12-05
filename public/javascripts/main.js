// const {RPSServiceClient} = require('./generated/rps-service_grpc_web_pb.js');
// const {PlayTurnRequest} = require('./generated/rps-service_pb.js');

Vue.use(VueMaterial.default)

// const client = new RPSServiceClient('localhost:8080');

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    humanScore: 0,
    aiScore: 0,
    gameId: null
  },
  methods: {
    play: function(player){
      this.humanScore++;
    }
  }
})
