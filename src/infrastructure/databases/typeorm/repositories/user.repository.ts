import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "../models/user.model";
import { User } from "@core/domain/entities";
import { IUserRepository } from "@core/domain/repositories/user-repository.interface";
import { IInfraMapper, IInfraMapperToken } from "@core/application/interfaces/infra-services/infra-mapper.interface";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
    @Inject(IInfraMapperToken)
    private mapper: IInfraMapper,
  ) {}

  async findById(id: number): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return user ? this.mapper.map(user, UserModel, User) : null;
  }

  async findByEmailOrUsername(email: string, username: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: [{ email: email }, { username: username }] });
    return user ? this.mapper.map(user, UserModel, User) : null;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return this.mapper.mapArray(users, UserModel, User);
  }

  async create(user: User): Promise<User> {
    const userModel = this.mapper.map(user, User, UserModel);
    const created = await this.userRepository.save(userModel);

    return this.mapper.map(created, UserModel, User);
  }
}
