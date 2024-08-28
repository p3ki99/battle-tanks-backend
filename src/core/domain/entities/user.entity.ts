export class User {
  id?: number;
  username: string;
  email: string;
  hashedPassword: string;
  salt: string;

  public static create(username: string, email: string, hashedPassword: string, salt: string): User {
    return new this(username, email, hashedPassword, salt);
  }

  constructor(username: string, email: string, hashedPassword: string, salt: string) {
    this.username = username;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.salt = salt;
  }
}
