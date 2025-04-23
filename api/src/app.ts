import Fastify from 'fastify';

const app = Fastify();

app.listen( { port: 3001 },() => {
  console.log('Server is running on http://localhost:3001');
});
