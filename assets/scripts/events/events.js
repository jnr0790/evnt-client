const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onAllEvents = function (event) {
  api.allEvents()
    .then(ui.onAllEventsSuccess)
    .catch(ui.onError)
}

const onSingleEvent = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.singleEvent(formData.event.id)
    .then(ui.onSingleEventSuccess)
    .catch(ui.onError)
}

const onViewEvent = function (event) {
  const id = $(event.target).data('id')

  api.singleEvent(id)
    .then(ui.onSingleEventSuccess)
    .catch(ui.onError)
}

const onDeleteEvent = function (event) {
  const id = $(event.target).data('id')

  api.deleteEvent(id)
    .then(onAllEvents)
    .then(ui.onDeleteEventSuccess)
    .catch(ui.onError)
}

module.exports = {
  onAllEvents,
  onSingleEvent,
  onViewEvent,
  onDeleteEvent
}
