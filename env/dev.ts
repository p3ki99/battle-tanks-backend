import { IEnvironment } from "./env";

const devEnv: IEnvironment = {
  env: "dev",
  port: 3000,
  saltSizeInBytes: 16,
  databases: [],
  jwt: {
    secret: "secret123",
    expiresIn: "1d",
  },
};

export default devEnv;
