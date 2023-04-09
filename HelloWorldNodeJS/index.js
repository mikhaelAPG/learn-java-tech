const htttp = require('http');
const hello = "Hello world";
console.log(hello);

//SERVER
const server = htttp.createServer((req, res) => {
    res.end('Hello from the server'); // calback function
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});