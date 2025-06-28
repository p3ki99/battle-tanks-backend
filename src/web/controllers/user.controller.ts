import { LoginUser } from "@core/application/actions/user/login-user.action";
import { RegisterUser } from "@core/application/actions/user/register-user.action";
import { LoginUserDto, LoginUserResponse, RegisterUserDto, UserDto } from "@core/application/dtos";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("users")
export class UserController {
  constructor(
    private readonly registerUser: RegisterUser,
    private readonly loginUser: LoginUser,
  ) {}

  @Post("/register")
  async register(@Body() registerUserDto: RegisterUserDto): Promise<UserDto> {
    return await this.registerUser.execute(registerUserDto);
  }

  @Post("/login")
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginUserResponse> {
    return await this.loginUser.execute(loginUserDto);
  }
}
