import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    nodeEnv:env.NODE_ENV,
    mongoUri:env.MONGO_URI,
    port: parseInt(env.PORT as string) || 5000
}