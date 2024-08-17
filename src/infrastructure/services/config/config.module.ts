import { Module } from "@nestjs/common";
import { IConfigServiceToken } from "@core/application/interfaces/infra-services";
import { ApiConfigService } from "./api-config.service";

@Module({
  providers: [
    {
      provide: IConfigServiceToken,
      useClass: ApiConfigService,
    },
  ],
  exports: [IConfigServiceToken],
})
export class ApiConfigModule {}
