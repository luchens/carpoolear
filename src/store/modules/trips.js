import {Trips} from '../../services/api'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
let tripsApi = new Trips;

const state = {
  trips: null,
  myTrips: null,  
}

// getters
const getters = {
  trips: state => state.trips,
  myTrips: state => state.myTrips,
}

// actions
const actions = {
  search({ commit, state }, data) {
    tripsApi.tag(['trips']).getTrips().then(trips => {
      console.log(trips, trips.data)
      commit(types.TRIPS_SET_TRIPS, trips.data);
    }).catch(err => {
      console.log(err)
    })
  },
  //nextPage({})

}

// mutations
const mutations = {
  [types.TRIPS_SET_TRIPS](state, trips) {
    state.trips = trips;
  },
  [types.TRIPS_ADD_TRIPS](state, trips) {
    state.trips = [...state.trips, ...trips];
  },
  [types.TRIPS_SET_MY_TRIPS](state, trips) {
    state.trips = trips;
  },
  [types.TRIPS_ADD_MY_TRIPS](state, trips) {
    state.trips = [...state.trips, ...trips];
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
