import React from "react";
import { Box, Button, Flex, Heading, Input, Text } from "theme-ui";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Otp: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      otp: ["", "", "", ""],
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().length(1, "Each digit must be a single character"))
        .test("complete", "Please enter the complete 4-digit OTP.", (value) =>
          // @ts-ignore
          value.every((val) => val !== "")
        ),
    }),
    onSubmit: (values) => {
      const otpValue = values.otp.join("");
      console.log("Submitted OTP: ", otpValue);
      navigate("/");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!isNaN(Number(e.target.value))) {
      const newOtp = [...formik.values.otp];
      newOtp[index] = e.target.value;
      formik.setFieldValue("otp", newOtp);

      if (e.target.value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      } else if (!e.target.value && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "450px",
        margin: "0 auto",
        marginTop: [30, 50],
        padding: [20, 30],
        gap: 4,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "background",
      }}
    >
      <Heading
        as="h2"
        sx={{
          fontSize: [24, 28],
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
          color: "text",
        }}
      >
        Verification Code
      </Heading>
      <Text sx={{ textAlign: "center", mb: 4, color: "textSecondary" }}>
        A 4-digit verification code has been sent to your email. Please enter it
        below.
      </Text>

      <form onSubmit={formik.handleSubmit}>
        <Flex sx={{ gap: 3, justifyContent: "center", mb: 3 }}>
          {formik.values.otp.map((data, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={data}
              maxLength={1}
              sx={{
                width: ["50px", "60px"],
                height: ["50px", "60px"],
                textAlign: "center",
                fontSize: [22, 24],
                border: "1px solid",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                "&:focus": {
                  borderColor: "primary",
                },
              }}
              onChange={(e) => handleChange(e, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </Flex>

        {formik.errors.otp && (
          <Text sx={{ color: "red", mb: 3, textAlign: "center" }}>
            {formik.errors.otp}
          </Text>
        )}

        <Button
          type="submit"
          sx={{
            padding: 20,
            width: "100%",
            borderRadius: 50,
            backgroundColor: "#192A41",
            color: "white",
            fontSize: 18,
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "primaryHover",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          Submit
        </Button>
      </form>

      <Text
        sx={{
          mt: 3,
          color: "textSecondary",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Didn’t receive the code?{" "}
        <Button
          variant="link"
          sx={{
            p: 1,
            color: "#fff",
            textDecoration: "none",
            border: 30,
            cursor: "pointer",
            "&:hover": {
              color: "primaryHover",
            },
          }}
        >
          Resend OTP
        </Button>
      </Text>

      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          color: "textSecondary",
          fontSize: 14,
        }}
      >
        <Text>
          Need help? Visit our{" "}
          <a href="/help" style={{ color: "#f39c12" }}>
            Help Center
          </a>{" "}
          or contact support.
        </Text>
        <Heading as="h3" sx={{ mt: 2 }}>
          Eloni
        </Heading>
      </Box>
    </Box>
  );
};

export default Otp;
