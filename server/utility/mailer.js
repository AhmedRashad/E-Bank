// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import { config } from "../config/config";

// const oAuth2Client = new google.auth.OAuth2(config.googleClientID, config.googleClientSecret, config.googleRedirectURI);

// oAuth2Client.setCredentials({ refresh_token: config.googleRefreshToken });

// const sendEmail = async(email:string,subject:string,message:string) => {
//     try {
//         const transportInfo = {
//              //this is the authentication for sending email.
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true, // use TLS
//             auth: {
//                 user: config.mailUser,
//                 pass: config.mailPassword,
//             },
//             }
//         const accessToken = await oAuth2Client.getAccessToken() as string;
//         // const transport = nodemailer.createTransport({
//         //     service: config.mailService,
//         //     auth: {
//         //         type: "oauth2",
//         //         user: config.mailUser,
//         //         clientId: config.googleClientID,
//         //         clientSecret: config.googleClientSecret,
//         //         refreshToken: config.googleRefreshToken,
//         //         accessToken: accessToken
//         //     }
//         // });
//         const transport = nodemailer.createTransport(transportInfo);
//         transport.verify((err, success) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(success);
//             }
//         });
//         const mailOptions = {
//             from: config.mailUser,
//             to: email,
//             subject: subject,
//             text: message};
//         const result = transport.sendMail(mailOptions);
//         return result;
//     } catch (error) {
//         return error
//     }
// }

// export default sendEmail;
