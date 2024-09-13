const http = require('http');
const port = process.env.PORT || 3003;

const requestHandler = (request, response) => {
  response.end('This is 3rd Application.');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

