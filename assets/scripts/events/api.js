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

module.exports = {
  allEvents
}
