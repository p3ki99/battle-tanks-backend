import { Module } from "@nestjs/common";
import { CryptoHashingService } from "./crypto-hashing.service";
import { IHashingServiceToken } from "@core/application/interfaces";

@Module({
  providers: [
    {
      provide: IHashingServiceToken,
      useClass: CryptoHashingService,
    },
  ],
  exports: [IHashingServiceToken],
})
export class HashingModule {}
