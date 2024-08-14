import { Module } from "@nestjs/common";
import { ILoggerServiceToken } from "@core/interfaces";
import { BTConsoleLogger } from "./bt-console-logger.service";

@Module({
  providers: [
    {
      provide: ILoggerServiceToken,
      useClass: BTConsoleLogger,
      //   useClass: CustomLogger,
      //   useClass: ConsoleLogger,
    },
  ],
  exports: [ILoggerServiceToken],
})
export class LoggerModule {}
