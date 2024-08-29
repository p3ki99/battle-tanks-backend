import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import env from "env";
import { PingController } from "./web/controllers/ping.controller";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { GlobalHttpExceptionFilter } from "./web/exceptions/filters/global-http-exception.filter";
import { LoggerMiddleware } from "./web/middlewares/logger.middleware";
import { AutomapperModule } from "@automapper/nestjs";
import { classes } from "@automapper/classes";
import { UserController } from "./web/controllers/user.controller";
import { CoreModule } from "@core/application/core.module";
import { CustomValidationPipe } from "./web/pipes/custom-validation.pipe";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
      isGlobal: true,
      cache: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    InfrastructureModule,
    CoreModule,
  ],
  controllers: [PingController, UserController],
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
