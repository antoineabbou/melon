import MobileDetect from 'mobile-detect'
import { $breakpoints } from '~/assets/variables.json'

export const state = () => ({
  vpSize: {
    w: 0,
    h: 0,
    bp: ''
  },
  isMobile: null
})

export const mutations = {
  SET_VP_SIZE(state, vpSize) {
    state.vpSize = vpSize
  },

  SET_MOBILE(state, isMobile) {
    state.isMobile = isMobile
  }
}

export const actions = {
  setVPSize({ commit }) {
    if (!process.client) return

    const size = {}
    size.w = window.innerWidth
    size.h = window.innerHeight

    for (const bp in $breakpoints) {
      const maxWidth = parseInt($breakpoints[bp])
      if (size.w <= maxWidth) {
        size.bp = bp
        break
      }
    }

    commit('SET_VP_SIZE', size)
  },

  setMobile({ commit }) {
    if (!process.client) return
    const md = new MobileDetect(window.navigator.userAgent)
    commit('SET_MOBILE', md.os())
  }
}

export const getters = {
  isMobile(state) {
    return state.isMobile
  },

  vpSize(state) {
    return state.vpSize
  }
}
