import React from 'react';
import Constants from 'expo-constants';
import {View, StyleSheet, Text} from 'react-native'
import RepositoryList from './RepositoryList';


const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,
    },
  });
const Main = () => {
  return (
    <RepositoryList/>
    )
};

export default Main;