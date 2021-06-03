const config = require('../config')
const store = require('../store')

const allEvents = function () {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/events/`,
    headers: {
      Authorization: `Token ${store.user.token}`
    }
  })
}

const singleEvent = function (id) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/events/${id}/`,
    headers: {
      Authorization: `Token ${store.user.token}`
    }
  })
}

const deleteEvent = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/events/${id}/`,
    headers: {
      Authorization: `Token ${store.user.token}`
    }
  })
}

const createEvent = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/events/`,
    headers: {
      Authorization: `Token ${store.user.token}`
    },
    data: JSON.stringify(formData)
  })
}

module.exports = {
  allEvents,
  singleEvent,
  deleteEvent,
  createEvent
}
