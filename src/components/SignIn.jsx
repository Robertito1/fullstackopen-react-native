import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput'

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});
const SignInForm = ({ onSubmit }) => {
 
  return (
    <View>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>login</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
   </Formik>
  );
};

export default SignIn;