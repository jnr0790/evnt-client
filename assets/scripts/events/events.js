const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

const onAllEvents = function (event) {
  api.allEvents()
    .then(ui.onAllEventsSuccess)
    .catch(ui.onError)
}

module.exports = {
  onAllEvents
}
