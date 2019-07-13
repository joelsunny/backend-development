### Reference
1. [Events API Doc](https://nodejs.org/api/events.html)
2. nodejs event loop, callback
    - [Callbacks](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)
    - [event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)


## Events Overview
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause `Function` objects ("listeners") to be called. 

All objects that emit events are instances of the `EventEmitter` class. These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object. 

When the `EventEmitter` object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

## Examples
1. Create a simple emitter object: `event-emitter.js`
2. Register listeners with arguments: `listener-arguments.js`
3. Aysnchronous handling of events: `asynchronous-events.js`