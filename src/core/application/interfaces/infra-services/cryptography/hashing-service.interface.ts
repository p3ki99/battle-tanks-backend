export interface IHashingService {
  hashPassword(plainPassword: string, saltSizeInBytes: number): Promise<IHashPasswordResponse>;
  validatePassword(plainPassword: string, hashedPassword: string, salt: string): Promise<boolean>;
}

export const IHashingServiceToken = "IHashingService";

export interface IHashPasswordResponse {
  hashedPassword: string;
  salt: string;
}
