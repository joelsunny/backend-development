const EventEmitter = require('events');

/*
simple event emitter with simple argument less listener
*/
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// register a listener for a the named event 'click', with the 
// EventEmitter object using the eventEmitter.on() method
myEmitter.on('click', () => {
  console.log('click event occurred!');
});

// emit the event 'click'
myEmitter.emit('click');