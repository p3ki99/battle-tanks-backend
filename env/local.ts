import { IEnvironment } from "./env";

const localEnv: IEnvironment = {
  env: "local",
  port: 3000,
  saltSizeInBytes: 16,
  databases: [
    {
      type: "postgres",
      name: "default",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "battle-tanks",
    },
  ],
  jwt: {
    secret: "secret123",
    expiresIn: "1d",
  },
};

export default localEnv;
