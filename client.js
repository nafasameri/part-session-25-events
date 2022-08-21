const http = require('http');

let option = {
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/users',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};

const req = http.request(option, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
});
req.end();