import { IDatabasesConfigurations, IDBConfiguration, IJwtConfiguration } from "env/env";

export interface IConfigService {
  getEnv(): string;
  getPort(): number;
  getSaltSizeInBytes(): number;
  getDatabasesConfiguration(): IDatabasesConfigurations;
  getDatabaseConfiguration(name: string): IDBConfiguration | undefined;
  getJwtConfiguration(): IJwtConfiguration;
}

export const IConfigServiceToken = "IConfigService";
