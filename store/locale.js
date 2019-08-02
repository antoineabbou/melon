export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'fr',
  defaultLocale: 'fr'
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {
  setLocale({ commit }, locale) {
    commit('SET_LANG', locale)
  }
}

export const getters = {
  all(state) {
    return state.locales
  },

  current(state) {
    return state.locale
  }
}
