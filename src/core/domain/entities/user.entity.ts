export class User {
  id?: number;
  username: string;
  email: string;
  password: string;
  salt: string;

  public static create(username: string, email: string, password: string, salt: string): User {
    return new this(username, email, password, salt);
  }

  private constructor(username: string, email: string, password: string, salt: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.salt = salt;
  }
}
