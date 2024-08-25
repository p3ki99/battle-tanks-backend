export interface IHashingService {
  hashPassword(plainPassword: string, saltSizeInBytes: number): Promise<IHashPasswordResponse>;
}

export const IHashingServiceToken = "IHashingService";

export interface IHashPasswordResponse {
  hashedPassword: string;
  salt: string;
}
