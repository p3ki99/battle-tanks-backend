import { IEnvironment } from "./env";

const devEnv: IEnvironment = {
  env: "dev",
  port: 3000,
  saltSizeInBytes: 16,
  databases: [],
};

export default devEnv;
