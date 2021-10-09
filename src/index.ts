import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

interface R<P, D> {
  params: P;
  data: D;
}

console.log(process.env.NODE_ENV);
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});

server.get<{ Body: { t12: string }; Result: { tt: 232 } }>('/', {}, async (req, rep) => {
  return 12;
});

server.listen(3000, () => {});
