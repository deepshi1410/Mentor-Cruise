export default {
  async registerMentor(context, payload) {
    const userId = context.rootGetters.userId
    const mentorData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      areas: payload.areas,
      hourlyRate: payload.hourlyRate,
    }
    const token = context.rootGetters.token
    const response = await fetch(
      `https://mentor-cruise-default-rtdb.firebaseio.com/mentors/${userId}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(mentorData)
      }
    );
    if (!response.ok) {
      // error ...
    }
    context.commit('registerMentor', {
      ...mentorData,
      id: userId
    });
  },
  async loadMentors(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://mentor-cruise-default-rtdb.firebaseio.com/mentors.json`)
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const mentors = []
    for (let key in responseData) {
      const mentor = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      }
      mentors.push(mentor)
    }
    context.commit('setMentors', mentors);
    context.commit('setFetchTimestamp');
  }
}