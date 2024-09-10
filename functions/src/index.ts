/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); // Replace with your SendGrid API Key

exports.sendOtpEmail = functions.https.onCall(async (data:any, context:any) => {
  const { email, otp } = data;

  const msg = {
    to: email,
    from: 'your-email@example.com', // Your verified sender email from SendGrid
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
    html: `<strong>Your OTP code is ${otp}</strong>`,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error:any) {
    return { success: false, error: error.message };
  }
});
