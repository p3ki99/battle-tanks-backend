import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @ApiProperty()
  @IsString({ message: "emailOrUsername must be string" })
  @IsNotEmpty()
  emailOrUsername: string;

  @ApiProperty()
  @IsString({ message: "password must be string" })
  @IsNotEmpty()
  password: string;
}
