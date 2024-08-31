import { Module } from "@nestjs/common";
import { AppConfigModule } from "./config/config.module";
import { LoggerModule } from "./logger/logger.module";
import { HttpModule } from "./http/http.module";
import { ExceptionModule } from "./exception/exception.module";
import { CryptographyModule } from "./cryptography/cryptography.module";
import { JwtModule } from "./jwt/jwt.module";

@Module({
  imports: [AppConfigModule, LoggerModule, HttpModule, ExceptionModule, CryptographyModule, JwtModule],
  providers: [],
  exports: [AppConfigModule, LoggerModule, HttpModule, ExceptionModule, CryptographyModule, JwtModule],
})
export class InfraServiceModule {}
