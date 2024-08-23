import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IExceptionService } from "@core/application/interfaces";

@Injectable()
export class NestExceptionService implements IExceptionService {
  badRequest(message: string = "", context?: string): never {
    throw new HttpException(message, HttpStatus.BAD_REQUEST, { cause: context });
  }

  unauthorized(message: string = "", context?: string): never {
    throw new HttpException(message, HttpStatus.UNAUTHORIZED, { cause: context });
  }

  forbidden(message: string = "", context?: string): never {
    throw new HttpException(message, HttpStatus.FORBIDDEN, { cause: context });
  }

  notFound(message: string = "", context?: string): never {
    throw new HttpException(message, HttpStatus.NOT_FOUND, { cause: context });
  }
  conflict(message: string = "", context?: string): never {
    throw new HttpException(message, HttpStatus.CONFLICT, { cause: context });
  }
}
