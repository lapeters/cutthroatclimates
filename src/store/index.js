import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecasts: [],
    players: [
      { i: 0, name: 'player', health: 100, defeated: false },
      { i: 1, name: 'cpu', health: 100, defeated: false }
    ],
    gameLog: []
  },
  getters: {
    FORECASTS: state => {
      return state.forecasts
    },
    IS_FORECASTS_FULL: state => {
      return state.forecasts.length > 1
    },
    GET_PLAYER_BY_NAME: state => (name) => {
      return state.players.find(players => players.name === name)
    }
  },
  mutations: {
    ADD_FORECAST: (state, payload) => {
      state.forecasts.push(payload)
    },
    REMOVE_FORECAST: (state, index) => {
      state.forecasts.splice(index, 1)
    },
    SET_PLAYER: (state, index) => {
      Vue.set(state.forecasts[index], 'Player', true)
    },
    ATTACK: (state, { attack, name }) => {
      var target = state.players.find(players => players.name === name)
      if (target.health - attack <= 0) {
        target.health = 0
        Vue.set(target, 'defeated', true)
      } else {
        target.health -= attack
      }
    },
    HEAL: (state, { heal, name }) => {
      var target = state.players.find(players => players.name === name)
      if (target.health + heal > 100) {
        target.health = 100
      } else {
        target.health += heal
      }
    },
    RESET: (state) => {
      for (var i = 0, l = state.players.length; i < l; i++) {
        Vue.set(state.players[i], 'health', 100)
      }
    }
  },
  actions: {
    GET_CITY: async (context, { term }) => {
      let response = await Axios.get(process.env.VUE_APP_AW_URL + 'locations/v1/cities/search?apikey=' + process.env.VUE_APP_AW_API + '&q=' + term)
      return response
    },
    GET_FORECAST: async (context, { id, name, area }) => {
      let response = await Axios.get(process.env.VUE_APP_AW_URL + 'currentconditions/v1/' + id + '?apikey=' + process.env.VUE_APP_AW_API)
      response.data[0].City = { Name: name, Area: area }
      response.data[0].Player = false
      context.commit('ADD_FORECAST', response.data[0])
    },
    REMOVE_FORECAST: async (context, index) => {
      context.commit('REMOVE_FORECAST', index)
    },
    SELECT_FORECAST: async (context, index) => {
      context.commit('SET_PLAYER', index)
    },
    GET_RANDOM_NUM: async (contex, special) => {
      var num = Math.round(Math.random() * 10)
      return special ? num + 10 : num
    },
    ATTACK ({ dispatch, commit }, { special, name }) {
      return dispatch('GET_RANDOM_NUM', special).then((attack) => {
        var payload = {
          attack: attack,
          name: name
        }
        commit('ATTACK', payload)
      })
    },
    HEAL ({ dispatch, commit }, name) {
      return dispatch('GET_RANDOM_NUM', false).then((heal) => {
        var payload = {
          heal: heal,
          name: name
        }
        commit('HEAL', payload)
      })
    },
    RESET: async (context) => {
      context.commit('RESET')
    }
  }
})
