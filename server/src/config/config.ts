import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    mongoUri:env.MONGO_URI,
    port: parseInt(env.PORT as string) || 5000
}