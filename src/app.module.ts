import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import env from "env";
import { PingController } from "./web/controllers/ping.controller";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

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
  providers: [],
})
export class AppModule {}
