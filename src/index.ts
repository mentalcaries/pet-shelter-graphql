import { createServer } from '@graphql-yoga/node';

const port = Number(process.env.API_PORT) || 5500;

const server = createServer({
  port,
});

server
  .start()
  .then(() =>
    console.log(`🚀 Server running at http://locahost:${port}/graphql`)
  );
