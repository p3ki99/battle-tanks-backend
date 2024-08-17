import { ILoggerService } from "@core/application/interfaces/infra-services";
import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class BTConsoleLogger extends ConsoleLogger implements ILoggerService {
  error(message: any, stack?: string, context?: string) {
    super.error(message, context);
    super.error(stack);
  }
}
