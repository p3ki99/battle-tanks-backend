import { Module } from "@nestjs/common";
import { IHttpServiceToken } from "@core/application/interfaces/infra-services/http-service.interface";
import { HttpModule as NestHttpModule } from "@nestjs/axios";
import { NestHttpService } from "./nest-http.service";

@Module({
  imports: [NestHttpModule],
  providers: [
    {
      provide: IHttpServiceToken,
      useClass: NestHttpService,
    },
  ],
  exports: [IHttpServiceToken],
})
export class HttpModule {}
