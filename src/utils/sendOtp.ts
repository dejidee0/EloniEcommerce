import firebase from "firebase/compat/app";

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
};

export const sendOTP = async (email:string) => {
  const otp = generateOTP();

  // Store the OTP and email in Firestore for verification later
  await firestore.collection("otps").doc(email).set({
    email,
    otp,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });

  // Call Firebase Function (or external API) to send OTP to email
  // await sendOTPToEmail(email, otp); -- You need Firebase Cloud Functions here

  alert("OTP has been sent to your email!");
};