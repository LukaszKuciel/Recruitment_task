const fs = require('fs');

const Hapi = require('hapi');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: { cors: true }
});

server.route({
  method: 'OPTIONS',
  path: '/advertisers',
  handler: (request, reply) => {
    const response = reply.response({}).code(200);
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
    return response;
  }
});

server.route({
  method: 'GET',
  path: '/advertisers',
  handler: (request, reply) => {
    const { type } = request.query;
    let response;
    try {
      response = reply.response(fs.readFileSync(`./server/data/advertisers/${type}/response.${type}`));
      response.header('Content-Type', `application/${type}`);
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Allow', 'GET, POST, HEAD, OPTIONS');
      response.header('Vary', 'Accept');
      response.type(`application/${type}`);
      response.header('Access-Control-Expose-Headers', 'Vary, Allow, Content-Type');
    } catch (error) {
      console.log(error);
    }
    return response;
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
