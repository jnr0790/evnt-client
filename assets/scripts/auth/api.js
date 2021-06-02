const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-up/`,
    data: JSON.stringify(data)
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-in/`,
    data: JSON.stringify(data)
  })
}

const changePw = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/change-pw/`,
    data: JSON.stringify(data),
    headers: {
      Authorization: `Token ${store.user.token}`
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/sign-out/`,
    data: JSON.stringify(data),
    headers: {
      Authorization: `Token ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
