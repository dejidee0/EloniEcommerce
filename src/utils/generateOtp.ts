import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState } from 'react';



const OTPVerification = () => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [inputOtp, setInputOtp] = useState("");
    const [serverOtp, setServerOtp] = useState(""); // Store the OTP sent by the server
  
    // Function to send OTP
    const sendOtp = async () => {
      const functions = getFunctions();
      const sendOtpEmail = httpsCallable(functions, 'sendOtpEmail');
      
      try {
        const result = await sendOtpEmail({ email });
        setServerOtp(result.data.otp); // Save OTP from server
        setOtpSent(true);
        alert("OTP sent to your email!");
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    };
  
    // Function to verify OTP
    const verifyOtp = () => {
      if (inputOtp === serverOtp.toString()) {
        alert("OTP Verified!");
      } else {
        alert("Invalid OTP!");
      }
    };
  


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure Nodemailer (or any other email service)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Cloud function to send a 4-digit OTP to the user's email
exports.sendOtpEmail = functions.https.onCall(async (data, context) => {
  const email = data.email;
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP

  // Send OTP to email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { otp }; // Return OTP to client for validation
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Email not sent');
  }
});
return (
    <div>
      <h2>OTP Email Verification</h2>
      {!otpSent ? (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={inputOtp}
            onChange={(e) => setInputOtp(e.target.value)}
            placeholder="Enter 4-digit OTP"
            maxLength="4" // Restricting input to 4 digits
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default OTPVerification;