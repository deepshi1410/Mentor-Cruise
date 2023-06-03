export default {
  requests(state, rootGetters) {
    const mentorId = rootGetters.userId
    return state.requests.filter(request => request.mentorId === mentorId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0
  }
}