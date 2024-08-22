import { Module } from "@nestjs/common";
import { AppConfigModule } from "./services/config/config.module";
import { LoggerModule } from "./services/logger/logger.module";
import { HttpModule } from "./services/http/http.module";
import { DatabaseModule } from "./databases/database.module";

@Module({
  imports: [DatabaseModule, AppConfigModule, LoggerModule, HttpModule],
  providers: [],
  exports: [AppConfigModule, LoggerModule, HttpModule],
})
export class InfrastructureModule {}
