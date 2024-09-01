import { Inject, Injectable } from "@nestjs/common";
import { BaseAction } from "../base-action.action";
import { IUserRepository, IUserRepositoryToken } from "@core/domain/repositories/user-repository.interface";
import { LoginUserDto, LoginUserResponse } from "@core/application/dtos";
import { IHashingService, IHashingServiceToken } from "@core/application/interfaces";
import { IJwtService, IJwtServiceToken } from "@core/application/interfaces/infra-services/jwt-service.interface";

@Injectable()
export class LoginUser extends BaseAction<LoginUserDto, LoginUserResponse> {
  constructor(
    @Inject(IHashingServiceToken) private hashingService: IHashingService,
    @Inject(IUserRepositoryToken) private userRepository: IUserRepository,
    @Inject(IJwtServiceToken) private jwtService: IJwtService,
  ) {
    super();
  }

  protected override async handle(registerUserDto: LoginUserDto): Promise<LoginUserResponse> {
    const { emailOrUsername, password } = registerUserDto;

    const user = await this.userRepository.findByEmailOrUsername(emailOrUsername, emailOrUsername);

    if (!user) this.exceptionService.notFound("user not found", LoginUser.name);

    const valid = await this.hashingService.validatePassword(password, user.hashedPassword, user.salt);

    if (!valid) this.exceptionService.unauthorized("wrong password", LoginUser.name);

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };

    const token = await this.jwtService.createToken(payload);

    return { token: token };
  }
}
