import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      locales: ['en', 'fr'],
      locale: 'fr',
      defaultLang: 'fr'
    },
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      },

    },

    actions: {
      nuxtServerInit ({ commit }) {
        return Promise.all([

        ]).then(() => {

        }).catch(console.error)

      },

      setLang ({commit}, locale) {
        commit('SET_LANG', locale)
      },

    },
    getters: {
    }
  })
}

export default createStore
