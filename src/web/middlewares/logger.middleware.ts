import { Injectable, Logger, type NestMiddleware } from "@nestjs/common";
import { type Request, type Response, type NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;

    res.on("finish", () => {
      const { statusCode } = res;

      if (statusCode < 400) {
        this.logger.log(`${method} ${originalUrl} ${statusCode}`);
      }
    });

    next();
  }
}
