import React from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput'
import useSignIn from '../hooks/useSignIn';

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
      <TouchableOpacity onPress={onSubmit}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};



const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log('clicked');
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
   </Formik>
  );
};

export default SignIn;