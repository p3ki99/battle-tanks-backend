import { ICoreMapperToken } from "@core/application/interfaces";
import { Module } from "@nestjs/common";
import { CoreAutoMapperService } from "./core-auto-mapper.service";

@Module({
  providers: [
    {
      provide: ICoreMapperToken,
      useClass: CoreAutoMapperService,
    },
  ],
  exports: [ICoreMapperToken],
})
export class CoreMapperModule {}
