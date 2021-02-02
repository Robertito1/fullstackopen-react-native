import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  tabItem: {
    flexGrow: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

const AppBarTab = ({ link, buttonText }) => {
  return (
    <Link to={link} component={TouchableOpacity}>
      <View style={styles.tabItem}>
        <Text color='textSecondary' fontWeight='bold'>
          {buttonText}
        </Text>
      </View>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/' buttonText='Repositories' />
        <AppBarTab link='/login' buttonText='Sign in' />
      </ScrollView>
    </View>
  );
};

export default AppBar;