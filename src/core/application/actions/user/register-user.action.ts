import { Inject, Injectable } from "@nestjs/common";
import { BaseAction } from "../base-action.action";
import { IUserRepository, IUserRepositoryToken } from "@core/domain/repositories/user-repository.interface";
import { RegisterUserDto } from "@core/application/dtos";
import { User } from "@core/domain/entities";
import {
  IConfigService,
  IConfigServiceToken,
  IHashingService,
  IHashingServiceToken,
} from "@core/application/interfaces";

@Injectable()
export class RegisterUser extends BaseAction<RegisterUserDto, User> {
  constructor(
    @Inject(IHashingServiceToken) private hashingService: IHashingService,
    @Inject(IConfigServiceToken) private configService: IConfigService,
    @Inject(IUserRepositoryToken) private userRepository: IUserRepository,
  ) {
    super();
  }

  protected override async handle(registerUserDto: RegisterUserDto): Promise<User> {
    const { email, username, password } = registerUserDto;

    const userExists = await this.userRepository.findById(1);

    if (userExists) this.exceptionService.conflict("User already exists", RegisterUser.name);

    const { hashedPassword, salt } = await this.hashingService.hashPassword(
      password,
      this.configService.getSaltSizeInBytes(),
    );

    this.loggerService.debug!(hashedPassword, salt);

    const user = User.create(username, email, hashedPassword, salt);
    this.loggerService.debug!(user);
    const res = await this.userRepository.create(user);

    console.log(res); // modelUser or entityUser

    return res;
  }
}
