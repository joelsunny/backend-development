const EventEmitter = require('events');

/*
The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions.
*/

const myEmitter = new EventEmitter();

console.log(myEmitter);

myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
});

myEmitter.emit('event', 'a', 'b');

myEmitter.on('click', function(a, b) {
    console.log(a, b, this);
  });

myEmitter.emit('click', 'c', 'd');

// Note: It is possible to use ES6 Arrow Functions as listeners, however, when doing so, 
// the this keyword will no longer reference the EventEmitter instance:

myEmitter.on('event2', (a, b) => {
  console.log(a, b, this);
});
myEmitter.emit('event2', 'a', 'b');

/*
output:

    EventEmitter {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined }

    a b EventEmitter {
    _events: [Object: null prototype] { event: [Function] },
    _eventsCount: 1,
    _maxListeners: undefined }

    c d EventEmitter {
    _events:
    [Object: null prototype] { event: [Function], click: [Function] },
    _eventsCount: 2,
    _maxListeners: undefined }

    a b {}

*/