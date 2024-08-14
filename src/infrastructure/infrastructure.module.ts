import { Module } from "@nestjs/common";
import { ApiConfigModule } from "./services/config/config.module";
import { LoggerModule } from "./services/logger/logger.module";

@Module({
  imports: [ApiConfigModule, LoggerModule],
  providers: [],
  exports: [ApiConfigModule, LoggerModule],
})
export class InfrastructureModule {}
