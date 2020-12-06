const {RPSServiceClient} = require('./generated/public/proto/rps-service_grpc_web_pb.js')
const {NewGameRequest} = require('./generated/public/proto/rps-service_pb.js')

import Vue from 'vue/dist/vue.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

const client = new RPSServiceClient('http://localhost:8080', null, null);

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    humanScore: 0,
    aiScore: 0,
    gameId: null
  },
  methods: {
    play: function (player) {
      let request = new NewGameRequest();
      client.createNewGame(request, {}, (err, response) => {
        if (!err) {
          this.humanScore++
          this.gameId = response.getGameid()
        }
      })
    }
  }
})
