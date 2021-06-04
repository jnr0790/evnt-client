'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const eventEvents = require('./events/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // fields to hide on initial start
  $('#sign-out').hide()
  $('#change-pw').hide()
  $('#all-events').hide()
  $('#single-event').hide()
  $('#events-display').hide()
  $('#headings').hide()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#new-event').hide()
  $('#search').hide()
  $('#change-pw-nav').hide()

  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#change-pw-nav').on('click', authEvents.onChangePwNav)

  // Event events
  $('#all-events').on('click', eventEvents.onAllEvents)
  $('#single-event').on('submit', eventEvents.onSingleEvent)
  $('#events-display').on('click', '.view-event', eventEvents.onViewEvent)
  $('#events-display').on('click', '.delete-event', eventEvents.onDeleteEvent)
  $('#create-event').on('submit', eventEvents.onCreateEvent)
  $('#update-event').on('submit', eventEvents.onUpdateEvent)
  $('#new-event').on('click', eventEvents.onNewEvent)
  $('#events-display').on('click', '.update-btn', eventEvents.onUpdateBtn)
})
