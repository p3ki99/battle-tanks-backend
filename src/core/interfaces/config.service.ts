export interface IConfigService {
  getEnv(): string;
  getPort(): number;
}

export const IConfigServiceToken = "IConfigService";
