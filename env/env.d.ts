export type APP_ENV_TYPES = "local" | "dev";

export interface IEnvironment {
  env: APP_ENV_TYPES;
  port: number;
}
