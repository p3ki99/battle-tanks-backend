import { Module } from "@nestjs/common";
import { IInfraMapperToken } from "@core/application/interfaces/infra-services/infra-mapper.interface";
import { InfraAutoMapperService } from "./infra-auto-mapper.service";
import { UserModelProfile } from "./user-model.profile";

@Module({
  providers: [
    UserModelProfile,
    {
      provide: IInfraMapperToken,
      useClass: InfraAutoMapperService,
    },
  ],
  exports: [IInfraMapperToken],
})
export class InfraMapperModule {}
