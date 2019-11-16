var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function() {
    console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('CUSTOM_EVENT_NAME', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('CUSTOM_EVENT_NAME');