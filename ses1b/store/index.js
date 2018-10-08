import Vuex from 'vuex'
import { resolve } from 'url';

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar: false,
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      toggleSidebar (state) {
        state.sidebar = !state.sidebar
      },
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
        signInWithFacebook({commit}) {
            return new Promise((resolvem, reject)=> {
                auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
                resolve()
            })
        }
    }
  })
}

export default createStore