import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  jwtSecret: process.env.JWT_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10),
  dbType: process.env.DB_TYPE,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  serverPort: parseInt(process.env.SERVER_PORT),
  saltRounds: parseInt(process.env.SALT_ROUNDS, 10),
  serverHost: process.env.SERVER_HOST,
  clientHost: process.env.CLIENT_HOST,
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },
  api: {
    prefix: "/api"
  }
};
