import React from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput'
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  input:{
    width: '80%',
    margin: 'auto',
    height: '4rem',
    marginTop: '20px',
    marginBottom: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '8px'
  },
   submit:{
    width: '80%',
    margin: 'auto',
    height: '3.5rem',
    backgroundColor: 'purple',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '8px'
   },
   text:{
     color: 'white',
     fontSize: '800',
     fontWeight: 'bold'
    }
});
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
      <FormikTextInput name="username" placeholder="username" style={styles.input}/>
      <FormikTextInput name="password" placeholder="password" style={styles.input} secureTextEntry/>
      <TouchableOpacity onPress={onSubmit} style={styles.submit}>
        <Text style={styles.text}>Login</Text>
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