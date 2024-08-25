import { Module } from "@nestjs/common";
import { AppConfigModule, LoggerModule, HttpModule, ExceptionModule, CryptographyModule } from "./services";
import { DatabaseModule } from "./databases/database.module";

@Module({
  imports: [DatabaseModule, AppConfigModule, LoggerModule, HttpModule, ExceptionModule, CryptographyModule],
  providers: [],
  exports: [AppConfigModule, LoggerModule, HttpModule, ExceptionModule, CryptographyModule],
})
export class InfrastructureModule {}
