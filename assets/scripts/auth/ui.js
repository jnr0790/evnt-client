const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

module.exports = {
  onSignUpSuccess
}
