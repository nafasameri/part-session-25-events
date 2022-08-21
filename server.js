const http = require('http');
const { event, getCount } = require('./eventHandler');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (method == 'GET') {
        event.emit('count');
        res.write(`count is ${getCount()}`);
        return res.end();
    }
});

const port = process.env.port || 5000;

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});