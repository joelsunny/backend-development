/*
The EventEmitter calls all listeners synchronously in the order in which they were registered. 
This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. 

When appropriate, listener functions can switch to an asynchronous  mode of operation using the 
setImmediate() or process.nextTick() methods:
*/
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});

myEmitter.emit('event', 'a', 'b');
