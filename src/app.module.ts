import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import env from "env";
import { PingController } from "./web/controllers/ping.controller";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { GlobalHttpExceptionFilter } from "./web/exceptions/filters/global-http-exception.filter";
import { LoggerMiddleware } from "./web/middlewares/logger.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
      isGlobal: true,
      cache: true,
    }),
    InfrastructureModule,
  ],
  controllers: [PingController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
