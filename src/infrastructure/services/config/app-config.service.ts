import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IConfigService } from "@core/application/interfaces/infra-services";
import { IDatabasesConfigurations, IDBConfiguration } from "env/env";

@Injectable()
export class AppConfigService implements IConfigService {
  constructor(private configService: ConfigService) {}

  getEnv(): string {
    return this.configService.get<string>("env", "local");
  }

  getPort(): number {
    return this.configService.get<number>("port", 3000);
  }

  getDatabasesConfiguration(): IDatabasesConfigurations {
    return this.configService.get<IDatabasesConfigurations>("databases", []);
  }

  getDatabaseConfiguration(name: string): IDBConfiguration | undefined {
    return this.configService.get<IDatabasesConfigurations>("databases", []).find((dbConfig) => dbConfig.name === name);
  }
}
