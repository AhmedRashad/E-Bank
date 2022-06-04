import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    nodeEnv:env.NODE_ENV,
    mongoUri:env.MONGO_URI,
    port: parseInt(env.PORT as string) || 5000,
    JWTSecret:env.JWT_SECRET as string,
    saltRounds:parseInt(env.SALT_ROUNDS as string),
    pepper:env.PEPPER as string
}