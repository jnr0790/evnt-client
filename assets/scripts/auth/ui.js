const store = require('./../store')

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  const email = store.user.email

  $('#message').text(`${email} is signed in!`)
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onChangePwSuccess = function (response) {
  $('#message').text('You sucessfully changed your password!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('You signed out!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePwSuccess,
  onSignOutSuccess
}
