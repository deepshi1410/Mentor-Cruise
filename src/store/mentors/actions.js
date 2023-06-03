export default {
  registerMentor(context, payload) {
    const mentorData = {
      id: context.rootGetters.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      areas: payload.areas,
      hourlyRate: payload.hourlyRate,
    }
    context.commit('registerMentor', mentorData)
  }
}