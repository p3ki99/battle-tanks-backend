import { APP_ENV_TYPES, IEnvironment } from "./env";
import localEnv from "./local";
import devEnv from "./dev";

function getEnv(): IEnvironment {
  const env = process.env.APP_ENV as APP_ENV_TYPES | undefined;
  console.log("Env ->", env);
  switch (env) {
    case "local":
      return localEnv;
    case "dev":
      return devEnv;
    default:
      return localEnv;
  }
}

export default getEnv;
