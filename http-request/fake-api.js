const http = require('http');

console.log('Listening on localhost:3000 ...');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World!');
        response.end();
    }

    if (request.url === '/numbers') {
        response.write(JSON.stringify([1, 2, 3, 4, 5]));
        response.end();
    }

    if (request.url === '/courses') {
        response.write(JSON.stringify({ courses: ['Node', 'Angular', 'Serverless', 'Elastic Search', 'DynamoDB'] }));
        response.end();
    }
});

server.listen(3000);

server.on('connection', (socket) => {
    console.log('New Connection...')
    console.table({ socket });
});
