import { Inject, Injectable } from "@nestjs/common";
import { BaseAction } from "../base-action.action";
import { IUserRepository, IUserRepositoryToken } from "@core/domain/repositories/user-repository.interface";
import { RegisterUserDto, UserDto } from "@core/application/dtos";
import { User } from "@core/domain/entities";
import {
  IConfigService,
  IConfigServiceToken,
  IHashingService,
  IHashingServiceToken,
} from "@core/application/interfaces";

@Injectable()
export class RegisterUser extends BaseAction<RegisterUserDto, UserDto> {
  constructor(
    @Inject(IHashingServiceToken) private hashingService: IHashingService,
    @Inject(IConfigServiceToken) private configService: IConfigService,
    @Inject(IUserRepositoryToken) private userRepository: IUserRepository,
  ) {
    super();
  }

  protected override async handle(registerUserDto: RegisterUserDto): Promise<UserDto> {
    const { email, username, password } = registerUserDto;

    const userExists = await this.userRepository.findByEmailOrUsername(email, username);

    if (userExists)
      userExists.email == email
        ? this.exceptionService.conflict("user with this email already exists", RegisterUser.name)
        : this.exceptionService.conflict("user with this username already exists");

    const { hashedPassword, salt } = await this.hashingService.hashPassword(
      password,
      this.configService.getSaltSizeInBytes(),
    );

    const user = await this.userRepository.create(User.create(username, email, hashedPassword, salt));

    return this.mapperService.map(user, User, UserDto);
  }
}
