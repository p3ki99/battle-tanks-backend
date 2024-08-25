import { Module } from "@nestjs/common";
import { HashingModule } from "./hashing/hashing.module";

@Module({
  imports: [HashingModule],
  providers: [],
  exports: [HashingModule],
})
export class CryptographyModule {}
