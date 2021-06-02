const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onAllEventsSuccess = function (responseData) {
  const events = responseData.events

  let eventsHtml = ''

  events.forEach(event => {
    eventsHtml += `
    <div id='event-cont'>
      <p><span>Name:</span> ${event.name}</p>
      <p><span>Location:</span> ${event.location}</p>
      <p><span>Date:</span> ${event.date}</p>
      <p><span>Time:</span> ${event.time}</p>
      <p><span>ID:</span> ${event.id}</p>
    </div>
    `
  })
  $('#events-display').html(eventsHtml)
}

module.exports = {
  onError,
  onAllEventsSuccess
}
