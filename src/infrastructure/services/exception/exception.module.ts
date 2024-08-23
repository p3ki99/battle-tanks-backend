import { Module } from "@nestjs/common";
import { IExceptionServiceToken } from "@core/application/interfaces";
import { NestExceptionService } from "./nest-exception.service";

@Module({
  providers: [
    {
      provide: IExceptionServiceToken,
      useClass: NestExceptionService,
    },
  ],
  exports: [IExceptionServiceToken],
})
export class ExceptionModule {}
