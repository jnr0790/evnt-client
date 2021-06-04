const store = require('./../store')

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
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
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#all-events').show()
  $('#single-event').show()
  $('#new-event').show()
  $('#search').show()
  $('#change-pw-nav').show()
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
  $('#search').hide()
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#all-events').hide()
  $('#single-event').hide()
  $('#events-display').empty()
  $('#events-display').hide()
  $('#headings').hide()
  $('#headings').empty()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#new-event').hide()
  $('#change-pw-nav').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePwSuccess,
  onSignOutSuccess
}
