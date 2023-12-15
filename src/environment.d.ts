export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_TYPE: string;
      DB_USER: string;
      DB_PASSWORD: string;
      SERVER_PORT: string;
      SALT_ROUNDS: string;
      SERVER_HOST: string;
      CLIENT_HOST: string;
    }
  }
}
