export interface IJwtService {
  createToken(payload: Object): Promise<string>;
  verifyToken<T extends object = object>(token: string): Promise<T>;
}

export const IJwtServiceToken = "IJwtService";
