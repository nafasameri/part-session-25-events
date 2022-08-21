const event = require('./event');

event.on('same', () => {
    console.log('Hi :)');
});

event.on('same', (Name, LastName, Age) => {
    console.log(`name: ${Name}, last name: ${LastName}, age: ${Age}`);
});

event.on('same', (Name, LastName) => {
    console.log(`FullName: ${Name} ${LastName}`);
});

event.on('same', (Name, LastName, Age) => {
    console.log(`age is ${Age}`);
});

module.exports = { event };