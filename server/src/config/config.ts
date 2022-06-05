import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    nodeEnv: env.NODE_ENV as string,
    host: env.HOST as string,
    forntendHost: env.FRONTEND_HOST as string,
    frontendPort: env.FRONTEND_PORT as string,
    mongoUri:env.MONGO_URI as string,
    port: parseInt(env.PORT as string) || 5000,
    JWTSecret:env.JWT_SECRET as string,
    saltRounds:parseInt(env.SALT_ROUNDS as string),
    pepper: env.PEPPER as string,
    mailService: env.MAIL_SERVICE as string,
    mailUser: env.MAIL_USER as string,
    mailPassword:env.MAIL_PASSWORD as string
}