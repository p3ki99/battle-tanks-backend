import { Module } from "@nestjs/common";
import { ActionModule } from "./actions/action.module";

@Module({
  imports: [ActionModule],
  exports: [ActionModule],
})
export class CoreModule {}
