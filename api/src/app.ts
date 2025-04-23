import Fastify from 'fastify';
import { ExceptionHandler } from './app/utils/Exception';

const app = Fastify();

app.setErrorHandler(ExceptionHandler);

app.listen( { port: 3001 },() => {
  console.log('Server is running on http://localhost:3001');
});
