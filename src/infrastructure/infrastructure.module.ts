import { Global, Module } from "@nestjs/common";
import { DatabaseModule } from "./databases/database.module";
import { InfraServiceModule } from "./services/infra-service.module";

@Global()
@Module({
  imports: [DatabaseModule, InfraServiceModule],
  providers: [],
  exports: [DatabaseModule, InfraServiceModule],
})
export class InfrastructureModule {}
