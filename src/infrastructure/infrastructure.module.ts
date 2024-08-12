import { Module } from "@nestjs/common";
import { ApiConfigModule } from "./services/config/config.module";

@Module({
  imports: [ApiConfigModule],
  providers: [],
  exports: [ApiConfigModule],
})
export class InfrastructureModule {}
