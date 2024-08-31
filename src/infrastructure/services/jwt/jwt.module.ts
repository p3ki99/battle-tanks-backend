import { IJwtServiceToken } from "@core/application/interfaces/infra-services/jwt-service.interface";
import { Module } from "@nestjs/common";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { NestJwtService } from "./nest-jwt.service";
import { AppConfigModule } from "../config/config.module";
import { IConfigService, IConfigServiceToken } from "@core/application/interfaces";

@Module({
  imports: [
    NestJwtModule.registerAsync({
      global: true,
      imports: [AppConfigModule],
      inject: [IConfigServiceToken],
      useFactory: async (configService: IConfigService) => {
        const jwtConfig = configService.getJwtConfiguration();

        return {
          secret: jwtConfig.secret,
          signOptions: { expiresIn: jwtConfig.expiresIn },
          global: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: IJwtServiceToken,
      useClass: NestJwtService,
    },
  ],
  exports: [IJwtServiceToken],
})
export class JwtModule {}
