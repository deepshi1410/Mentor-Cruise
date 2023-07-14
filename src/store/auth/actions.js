export default {
  login() {

  },
  async signup(context, payload) {
    const result = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const resultData = await result.json()
    if (!result.ok) {
      const error = new Error(resultData.message || 'Failed to authenticate')
      throw error
    }
    context.commit('setUser', {
      token: resultData.idToken,
      userId: resultData.localId,
      tokenExpiration: resultData.expiresIn
    });
  }
}