import { Module } from "@nestjs/common";
import { IHttpServiceToken } from "@core/interfaces/http.service";
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
