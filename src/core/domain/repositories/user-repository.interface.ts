import { User } from "../entities";

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findByEmailOrUsername(email: string, username: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  create(user: User): Promise<User>;
}

export const IUserRepositoryToken = "IUserRepository";
