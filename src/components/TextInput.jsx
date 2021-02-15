import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';


const TextInput = ({ style, ...props }) => {

  return <NativeTextInput style={style} {...props} />;
};

export default TextInput;