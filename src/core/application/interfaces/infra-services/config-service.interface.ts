import { IDatabasesConfigurations, IDBConfiguration } from "env/env";

export interface IConfigService {
  getEnv(): string;
  getPort(): number;
  getDatabasesConfiguration(): IDatabasesConfigurations;
  getDatabaseConfiguration(name: string): IDBConfiguration | undefined;
}

export const IConfigServiceToken = "IConfigService";
