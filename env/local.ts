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
};

export default localEnv;
