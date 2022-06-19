const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'NodeJs');
  const { url, method } = request;

  if (url == '/') {
    if (method === 'GET') {
      response.end(
        JSON.stringify({
          message: 'Ini adalah homepage',
        })
      );

      response.statusCode = 200;
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url == '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `Halo! ini adalah halaman ${url}`,
        })
      );
    } else if (method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(
          JSON.stringify({
            message: `<h1>Hai, ${name}</h1>`,
          })
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: 'Halaman tidak ditemukan',
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
