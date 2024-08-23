import { Module } from "@nestjs/common";
import { AppConfigModule, LoggerModule, HttpModule, ExceptionModule } from "./services";
import { DatabaseModule } from "./databases/database.module";

@Module({
  imports: [DatabaseModule, AppConfigModule, LoggerModule, HttpModule, ExceptionModule],
  providers: [],
  exports: [AppConfigModule, LoggerModule, HttpModule, ExceptionModule],
})
export class InfrastructureModule {}
