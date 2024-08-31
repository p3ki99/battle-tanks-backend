import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IJwtService } from "@core/application/interfaces/infra-services/jwt-service.interface";

@Injectable()
export class NestJwtService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(payload: object): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  async verifyToken<T extends object = object>(token: string): Promise<T> {
    return await this.jwtService.verifyAsync<T>(token);
  }
}
