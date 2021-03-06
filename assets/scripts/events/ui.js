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
    <div class='event-cont'>
    <p><span>Name:</span> ${event.name}</p>
    <p><span>Location:</span> ${event.location}</p>

    <button class='view-event btn' data-id=${event.id}>View Details</button>
    </div>
    `
  })
  $('#events-display').toggle()
  $('#headings').toggle()
  if (eventsHtml === '') {
    $('#events-display').html('<p>No Events Yet...</p>')
  } else {
    $('#headings').html('<h2>All Events</h2>')
    $('#events-display').html(eventsHtml)
  }
}

const onSingleEventSuccess = function (responseData) {
  const event = responseData.event

  const eventHtml = `
  <div class='event-cont'>
    <p><span>Name:</span> ${event.name}</p>
    <p><span>Location:</span> ${event.location}</p>
    <p><span>Date:</span> ${event.date}</p>
    <p><span>Time:</span> ${event.time}</p>
    <p><span>ID:</span> ${event.id}</p>

    <button class='update-btn btn'>Update</button>

    <button class='delete-event btn' data-id=${event.id}>Delete</button>
  </div>
    `
  $('#events-display').show()
  $('#events-display').html(eventHtml)
  $('#headings').show()
  $('#headings').html('<h2>Event Details</h2>')
  $('form').trigger('reset')
  $('#message').text('Successfully viewing event detail!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onDeleteEventSuccess = function () {
  $('#message').text('Event successfully deleted')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onCreateEventSuccess = function () {
  $('#message').text('A new event was created! View Events to see!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateEventSuccess = function () {
  $('#message').text('Your event was updated! View Events to see!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onAllEventsSuccess,
  onSingleEventSuccess,
  onDeleteEventSuccess,
  onCreateEventSuccess,
  onUpdateEventSuccess
}
