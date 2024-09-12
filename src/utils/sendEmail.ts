/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendOTPToEmail = functions.firestore
  .document("otps/{email}")
  .onCreate((snap:any) => {
    const { email, otp } = snap.data();
    const msg = {
      to: email,
      from: "your-email@example.com",
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}`,
    };
    return sgMail.send(msg);
  });
