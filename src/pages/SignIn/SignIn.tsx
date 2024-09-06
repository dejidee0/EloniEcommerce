/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Button, Input, Label, Flex } from "@theme-ui/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/firebaseConfig/firebaseConfig";
import { Heading, Paragraph } from "theme-ui";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log("userCredential", userCredential);

        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("userData", userData);

          if (userData.role === "admin") {
            console.log("admin-dashboard");

            navigate("/admin-dashboard");
          } else {
            console.log("users-dashboard");

            navigate("/users-dashboard");
          }
        } else {
          console.error("No user data found in Firestore");
        }
      } catch (error) {
        console.error("Error signing in:", error);
      }
    },
  });

  return (
    // @ts-ignore
    <Box
      as="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto auto",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <Heading sx={{ marginBottom: 20, textAlign: "center" }}>
        Welcome to <span sx={{ color: "#ff0000" }}>Eloni</span>
      </Heading>
      <Flex sx={{ flexDirection: "column", gap: 3 }}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <div sx={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <div sx={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <Paragraph sx={{ textAlign: "right" }}>
          Don't have an Account{" "}
          <Link
            to={"/sign-up"}
            sx={{
              color: "blue",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </Paragraph>

        <Button
          sx={{
            backgroundColor: "#192A41",
            borderRadius: 50,
            padding: 20,
            cursor: "pointer",
            marginTop: 20,
          }}
          type="submit"
        >
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

export default SignIn;
