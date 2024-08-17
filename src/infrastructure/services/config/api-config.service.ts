import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IConfigService } from "@core/application/interfaces/infra-services";

@Injectable()
export class ApiConfigService implements IConfigService {
  constructor(private configService: ConfigService) {}

  getEnv(): string {
    return this.configService.get<string>("env", "local");
  }

  getPort(): number {
    return this.configService.get<number>("port", 3000);
  }
}
