import mentorsModule from './mentors/index.js'
import requestsModule from './requests/index.js'
import { createStore } from 'vuex'
const store = createStore({
  modules: {
    mentors: mentorsModule,
    requests: requestsModule
  }
})
export default store;