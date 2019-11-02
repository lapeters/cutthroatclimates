import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecasts: []
  },
  getters: {
    FORECASTS: state => {
      return state.forecasts
    },
    IS_FORECASTS_FULL: state => {
      return state.forecasts.length > 1
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
    }
  },
  modules: {
  }
})
