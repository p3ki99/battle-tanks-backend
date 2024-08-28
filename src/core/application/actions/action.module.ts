import { Module } from "@nestjs/common";
import { RegisterUser } from "./user/register-user.action";
import { AppServiceModule } from "../services/app-service.module";

@Module({
  imports: [AppServiceModule],
  providers: [RegisterUser],
  exports: [RegisterUser],
})
export class ActionModule {}
