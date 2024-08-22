import { User } from "../entities";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
}

export const IUserRepositoryToken = "IUserRepository";
