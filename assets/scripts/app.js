'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const eventEvents = require('./events/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePw)

  // Event events
  $('#all-events').on('click', eventEvents.onAllEvents)
  $('#single-event').on('submit', eventEvents.onSingleEvent)
  $('#events-display').on('click', '.view-event', eventEvents.onViewEvent)
  $('#events-display').on('click', '.delete-event', eventEvents.onDeleteEvent)
})
