const EventEmitter = require('events').EventEmitter;

let count = 0;
const event = new EventEmitter();
event.once('count', () => {
    count = 0;
});

event.on('count', () => {
    count++;
    console.log('Hi :)');
});

function getCount() {
    return count;
}

module.exports = { event, getCount };