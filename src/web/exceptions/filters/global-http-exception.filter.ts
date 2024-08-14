import { type ExceptionFilter, Catch, type ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { type Response } from "express";

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalHttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let errorContext = "";
    let message = "";

    if (exception instanceof HttpException) {
      errorContext = (exception.cause as string) ?? GlobalHttpExceptionFilter.name;
      message = `${request.method} ${request.url} ${exception.getStatus()}`;

      this.logger.error(message, exception.stack, errorContext);
    } else if (exception instanceof Error) {
      errorContext = GlobalHttpExceptionFilter.name;
      message = `${request.method} ${request.url} ${HttpStatus.INTERNAL_SERVER_ERROR}`;

      this.logger.error(message, exception.stack, errorContext);
    }

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
