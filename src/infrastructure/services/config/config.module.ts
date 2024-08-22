import { Module } from "@nestjs/common";
import { ApiConfigService } from "./api-config.service";
import { IConfigServiceToken } from "@core/application/interfaces";

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
