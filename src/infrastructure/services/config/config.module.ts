import { Module } from "@nestjs/common";
import { AppConfigService } from "./app-config.service";
import { IConfigServiceToken } from "@core/application/interfaces";

@Module({
  providers: [
    {
      provide: IConfigServiceToken,
      useClass: AppConfigService,
    },
  ],
  exports: [IConfigServiceToken],
})
export class AppConfigModule {}
