//src/database/database.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "../models/user.model";
import { IUserRepositoryToken } from "@core/domain/repositories/user-repository.interface";
import { UserRepository } from "./user.repository";
import { InfraMapperModule } from "@infrastructure/services";

@Module({
  imports: [TypeOrmModule.forFeature([UserModel]), InfraMapperModule],
  providers: [
    {
      provide: IUserRepositoryToken,
      useClass: UserRepository,
    },
  ],
  exports: [IUserRepositoryToken],
})
export class RepositoryModule {}
