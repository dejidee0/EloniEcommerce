import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "theme-ui";
import { useNavigate } from "react-router-dom";

const OtpPage: React.FC = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState("");

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = element.value;
      return newOtp;
    });
    if (element.value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    } else if (!element.value && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpValue = otp.join("");
    if (otpValue.length < 4) {
      setError("Please enter the complete 4-digit OTP.");
    } else {
      setError("");
      console.log("Submitted OTP: ", otpValue);
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
        marginTop: 50,
        p: 10,
        gap: 3,
      }}
    >
      <Box sx={{ margin: "0 auto", gap: "3" }}>
        <Heading sx={{ textAlign: "center" }}>Verification code</Heading>
        <Text sx={{ mb: 4 }}>
          We have sent a Verification code to your email.
        </Text>

        <form onSubmit={handleSubmit}>
          <Flex sx={{ gap: 3, mb: 3, justifyContent: "center" }}>
            {otp.map((data, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                value={data}
                maxLength={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "50px",
                  textAlign: "center",
                  fontSize: "24px",
                  border: "1px solid ",
                  borderRadius: "4px",
                  "&:focus": {
                    borderColor: "red !important",
                  },
                }}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </Flex>

          {error && <Text sx={{ color: "red", mb: 3 }}>{error}</Text>}

          <Button
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: "orange",
              color: "white",
              py: 2,
              fontSize: 18,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e67e22",
              },
            }}
          >
            Submit
          </Button>
        </form>

        <Text sx={{ mt: 3, color: "textSecondary", fontSize: 14 }}>
          Didn't receive the verification code? It could take a bit of time,
          request a new code
          <Button
            variant="link"
            sx={{
              p: 0,
              color: "orange",
              cursor: "pointer",
              "&:hover": {},
            }}
          >
            Resend OTP
          </Button>
        </Text>
      </Box>
      <Box
        sx={{
          bottom: 0,
          position: "absolute",
          textAlign: "center",
          // paddingBottom: 4,
        }}
      >
        <Text>
          For further support, you may visit the help center or contact our
          customer service team.
        </Text>
        <Heading>Eloni</Heading>
      </Box>
    </Box>
  );
};

export default OtpPage;
