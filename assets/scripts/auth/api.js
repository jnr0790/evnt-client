const config = require('./../config')

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

module.exports = {
  signUp,
  signIn
}
