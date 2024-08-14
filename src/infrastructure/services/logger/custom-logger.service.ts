import { ILoggerService } from "@core/interfaces";
import { Injectable, LoggerService } from "@nestjs/common";

@Injectable()
export class CustomLogger implements ILoggerService {
  log(message: string): void {
    console.log(`[my-LOG] ${message}`);
  }

  error(message: string, trace?: string): void {
    console.error(`[my-ERROR] ${message}`, trace);
  }

  warn(message: string): void {
    console.warn(`[my-WARN] ${message}`);
  }

  debug(message: string): void {
    console.debug(`[my-DEBUG] ${message}`);
  }

  verbose(message: string): void {
    console.log(`[my-VERBOSE] ${message}`);
  }
}
