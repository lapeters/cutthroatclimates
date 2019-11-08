import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: 0,
    forecasts: [],
    players: [
      { i: 0, name: 'player', health: 100 },
      { i: 1, name: 'cpu', health: 100 }
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
    },
    IS_PLAYER_DEFEATED: state => {
      return state.players.filter(players => players.end === 'loser')
    }
  },
  mutations: {
    START_LOADING: (state) => {
      state.loading++
    },
    FINISH_LOADING: (state) => {
      state.loading--
    },
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
      } else {
        target.health -= attack
      }
    },
    HEAL: (state, { heal, name }) => {
      var target = state.players.find(players => players.name !== name)
      if (target.health + heal > 100) {
        target.health = 100
      } else {
        target.health += heal
      }
    },
    RESET: (state) => {
      for (var i = 0, l = state.players.length; i < l; i++) {
        Vue.set(state.players[i], 'health', 100)
        Vue.set(state.players[i], 'end', null)
      }
      state.gameLog.splice(0, state.gameLog.length)
    },
    ADD_LOG: (state, { player, hit, action }) => {
      state.gameLog.unshift({ player, hit, action })
    },
    END_GAME: (state, name) => {
      for (var i = 0, l = state.players.length; i < l; i++) {
        if (state.players[i].name === name) {
          Vue.set(state.players[i], 'end', 'loser')
        } else {
          Vue.set(state.players[i], 'end', 'winner')
        }
      }
    }
  },
  actions: {
    GET_CITY: async (context, term) => {
      let response = await Axios.get(process.env.VUE_APP_AW_URL + 'locations/v1/cities/search?apikey=' + process.env.VUE_APP_AW_API + '&q=' + term)
      return response
    },
    GET_FORECAST ({ dispatch, commit }, term) {
      commit('START_LOADING')
      return dispatch('GET_CITY', term).then((cityRes) => {
        Axios.get(process.env.VUE_APP_AW_URL + 'currentconditions/v1/' + cityRes.data[0].Key + '?apikey=' + process.env.VUE_APP_AW_API).then(response => {
          commit('FINISH_LOADING')
          var name = cityRes.data[0].EnglishName
          var area = (cityRes.data[0].Country.ID === 'US' ? cityRes.data[0].AdministrativeArea.EnglishName : cityRes.data[0].Country.EnglishName)
          response.data[0].City = { Name: name, Area: area }
          response.data[0].Player = false
          commit('ADD_FORECAST', response.data[0])
        })
      })
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
    ATTACK ({ state, dispatch, commit }, { special, name }) {
      return dispatch('GET_RANDOM_NUM', special).then((attack) => {
        var target = state.players.find(players => players.name !== name)
        var payload = {
          attack: attack,
          name: target.name
        }
        if (target.health - attack <= 0) {
          commit('ATTACK', payload)
          commit('ADD_LOG', { player: name, hit: attack, action: 'attacks' })
          commit('END_GAME', target.name)
        } else {
          commit('ATTACK', payload)
          commit('ADD_LOG', { player: name, hit: attack, action: 'attacks' })
        }
      })
    },
    HEAL ({ dispatch, commit }, name) {
      return dispatch('GET_RANDOM_NUM', false).then((heal) => {
        var payload = {
          heal: heal,
          name: name
        }
        commit('HEAL', payload)
        commit('ADD_LOG', { player: name, hit: heal, action: 'heals' })
      })
    },
    RESET: async (context) => {
      context.commit('RESET')
    }
  }
})
