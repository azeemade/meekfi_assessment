import { createStore } from 'vuex'
import users from './modules/users'
import locations from './modules/locations'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    users,
    locations
  },
  strict: debug,
})