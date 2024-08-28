import { Module } from "@nestjs/common";
import { CoreMapperModule } from "./mapper/core-mapper.module";

@Module({
  imports: [CoreMapperModule],
  exports: [CoreMapperModule],
})
export class AppServiceModule {}
