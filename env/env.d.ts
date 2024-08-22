export type APP_ENV_TYPES = "local" | "dev";

export interface IEnvironment {
  env: APP_ENV_TYPES;
  port: number;
  databases: IDatabasesConfigurations;
}

export interface IDBConfiguration {
  type: "postgres" | "mysql" | "oracle";
  name: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize?: boolean;
}

export interface IDatabasesConfigurations extends Array<IDBConfiguration> {}
