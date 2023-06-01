import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'c1',
          firstName: 'Subodh',
          lastName: 'Sharma',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Subodh and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    }
  },
  getters,
  mutations,
  actions,
}