const {RPSServiceClient} = require('./generated/public/proto/rps-service_grpc_web_pb.js')
const {NewGameRequest, PlayTurnRequest, RPS} = require('./generated/public/proto/rps-service_pb.js')

import Vue from 'vue/dist/vue.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

const client = new RPSServiceClient('http://localhost:8080', null, null);

function actionToRPS(action) {
  return {
    'rock': RPS.ROCK,
    'paper': RPS.PAPER,
    'scissors': RPS.SCISSORS
  }[action]
}

function rpsToAction(rps) {
  return {
    [RPS.ROCK]: 'rock',
    [RPS.PAPER]: 'paper',
    [RPS.SCISSORS]: 'scissors'
  }[rps]
}

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    humanScore: 0,
    aiScore: 0,
    gameId: null,
    turnMessage: 'What do you want to play?'
  },
  mounted: function() {
    if(!this.gameId){
      let request = new NewGameRequest()
      client.createNewGame(request, {}, (err, response) => {
        if (!err) {
          this.gameId = response.getGameid()
        }
      })
    }
  },
  methods: {
    play: function (action) {
      let request = new PlayTurnRequest()
      request.setGameid(this.gameId)
      request.setRps(actionToRPS(action))
      client.playTurn(request, {}, (err, response) => {
        if (!err) {
          this.humanScore = response.getNewstate().getHumanscore()
          this.aiScore = response.getNewstate().getAiscore()
          this.turnMessage = `Human played ${action}, AI played ${rpsToAction(response.getAirps())}`
        }
      })
    }
  }
})
