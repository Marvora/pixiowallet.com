import { FastifyError, FastifyRequest, FastifyReply } from 'fastify';

class Exception extends Error {
  status: number;
  constructor(message: string, code: number) {
    super(message);
    this.message = message ?? 'Server Error';
    this.status = code ?? 500;
  }
}

class BadRequestException extends Exception {
  constructor(message: string) {
    super(message ?? 'Bad Request', 400);
  }
}

class UnauthorizedException extends Exception {
  constructor(message: string) {
    super(message ?? 'Unauthorized', 401);
  }
}

class NotFoundException extends Exception {
  constructor(message: string) {
    super(message ?? 'Not Found', 404);
  }
}

function ExceptionHandler(error: FastifyError, request: FastifyRequest, reply: FastifyReply) {
  if(error instanceof Exception) {
    reply.code(error.status).send({
      error: {
        code: error.status,
        message: error.message
      }
    });
  }

  reply.code(500).send({
    error: {
      code: 500,
      message: error.message
    }
  });
}

export {
  Exception,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ExceptionHandler
};
