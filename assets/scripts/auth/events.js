const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onChangePw = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePw(data)
    .then(ui.onChangePwSuccess)
    .catch(ui.onError)
}
const onChangePwNav = function (event) {
  $('#change-pw').toggle()
  $('#create-event').hide()
  $('#update-event').hide()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onChangePwNav,
  onSignOut
}
