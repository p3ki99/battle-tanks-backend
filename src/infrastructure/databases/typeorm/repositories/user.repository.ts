// infrastructure/repositories/user.repository.ts
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "../models/user.model";
import { User } from "@core/domain/entities";
import { IUserRepository } from "@core/domain/repositories/user-repository.interface";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<UserModel>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
