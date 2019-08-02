export const state = () => ({
  isLoaded: false
})

export const mutations = {
  SET_LOADED(state, isLoaded) {
    state.isLoaded = isLoaded
  }
}

export const actions = {
  setLoaded({ commit }, isLoaded) {
    commit('SET_LOADED', isLoaded)
  }
}

export const getters = {
  isLoaded(state) {
    return state.isLoaded
  }
}
