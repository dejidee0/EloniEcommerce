/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Button, Input, Label, Flex } from '@theme-ui/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '@/firebaseConfig/firebaseConfig';
import { Heading, Paragraph } from 'theme-ui';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        // @ts-ignore
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log('userCredential', userCredential);

        await setDoc(doc(db, 'users', userCredential.user.uid), {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          role: 'user',
        });
        navigate('/users-dashboard');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
  });

  return (
    // @ts-ignore
    <Box as="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 400, margin: '0 auto', height: '100vh', alignContent: 'center' }}>
      <Heading sx={{ marginBottom: 20, textAlign: 'center' }}>Create An Account</Heading>

      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Box sx={{ color: 'red' }}>{formik.errors.firstName}</Box>
        ) : null}

        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Box sx={{ color: 'red' }}>{formik.errors.lastName}</Box>
        ) : null}

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Box sx={{ color: 'red' }}>{formik.errors.email}</Box>
        ) : null}

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <Box sx={{ color: 'red' }}>{formik.errors.password}</Box>
        ) : null}

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <Box sx={{ color: 'red' }}>{formik.errors.confirmPassword}</Box>
        ) : null}

        <Paragraph sx={{ textAlign: 'right' }}>Don't have an Account <Link to="/" sx={{ color: 'blue', cursor: 'pointer', fontWeight: '600', textDecoration: 'none' }}>Log in</Link></Paragraph>


        <Button sx={{ backgroundColor: '#192A41', borderRadius: 50, padding: 20, cursor: 'pointer', marginTop: 20 }} type="submit">Sign Up</Button>
      </Flex>
    </Box>
  );
};

export default SignUp;