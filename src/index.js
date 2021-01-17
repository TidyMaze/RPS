const {RPSServiceClient} = require('./generated/public/proto/rps-service_grpc_web_pb.js')
const {NewGameRequest, PlayTurnRequest, RPS} = require('./generated/public/proto/rps-service_pb.js')

import Vue from 'vue/dist/vue.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import * as d3 from 'd3'
import * as dagreD3 from 'dagre-d3'
import * as graphlibDot from 'graphlib-dot'

Vue.use(VueMaterial)

const protocol = window.location.protocol
const host = window.location.host

const client = new RPSServiceClient(`${protocol}//${host}`, null, null);

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

function showGraph(dot){
  // Create the input graph
  var g = graphlibDot.read(dot)
  var render = new dagreD3.render()
  var svg = d3.select("svg")
  render(d3.select("svg g"), g)
  var graphWidth = g.graph().width
  var graphHeight = g.graph().height
  console.log('size: ' + graphWidth + ', ' + graphHeight)
  if(graphWidth >= 0 && graphHeight >= 0) {
    svg.attr("viewBox", `0 0 ${graphWidth} ${graphHeight}`)
  }
}

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    humanScore: 0,
    aiScore: 0,
    gameId: null,
    turnMessage: 'What do you want to play?',
    callOngoing: false
  },
  mounted: function() {
    if (!this.gameId) {
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
      this.callOngoing = true;
      client.playTurn(request, {}, (err, response) => {
        if (!err) {
          this.humanScore = response.getNewstate().getHumanscore()
          this.aiScore = response.getNewstate().getAiscore()
          this.turnMessage = `Human played ${action}, AI played ${rpsToAction(response.getAirps())}`
          // console.log(response.getStats().getPredictiontree())
          this.callOngoing = false;
          setTimeout(() => showGraph(response.getStats().getPredictiontree()), 0)
        }
      })
    }
  }
})
