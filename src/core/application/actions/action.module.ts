import { Module } from "@nestjs/common";
import { RegisterUser } from "./user/register-user.action";
import { AppServiceModule } from "../services/app-service.module";
import { LoginUser } from "./user/login-user.action";

@Module({
  imports: [AppServiceModule],
  providers: [RegisterUser, LoginUser],
  exports: [RegisterUser, LoginUser],
})
export class ActionModule {}
