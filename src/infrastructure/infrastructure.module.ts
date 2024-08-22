import { Module } from "@nestjs/common";
import { ApiConfigModule } from "./services/config/config.module";
import { LoggerModule } from "./services/logger/logger.module";
import { HttpModule } from "./services/http/http.module";
import { DatabaseModule } from "./databases/database.module";

@Module({
  imports: [DatabaseModule, ApiConfigModule, LoggerModule, HttpModule],
  providers: [],
  exports: [ApiConfigModule, LoggerModule, HttpModule],
})
export class InfrastructureModule {}
