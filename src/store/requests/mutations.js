export default {
  contactMentor(context, payload) {
    const newRequestData = {
      id: new Date().toISOString(),
      mentorId: payload.mentorId,
      email: payload.email,
      message: payload.message
    }
    context.commit('addRequest', newRequestData)
  }
}