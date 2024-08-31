import { ICoreMapperToken } from "@core/application/interfaces";
import { Module } from "@nestjs/common";
import { CoreAutoMapperService } from "./core-auto-mapper.service";
import { UserProfile } from "./user.profile";

@Module({
  providers: [
    {
      provide: ICoreMapperToken,
      useClass: CoreAutoMapperService,
    },
    UserProfile,
  ],
  exports: [ICoreMapperToken],
})
export class CoreMapperModule {}
