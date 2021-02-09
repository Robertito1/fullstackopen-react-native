import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link, useHistory } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../context/AuthStorageContext';
import { useApolloClient, useQuery } from '@apollo/react-hooks';


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


const SignOutTab = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/login');
  };

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <View style={styles.tabItem}>
        <Text color='textSecondary' fontWeight='bold'>
          Sign out
        </Text>
      </View>
    </TouchableOpacity>
  );
};
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
  const { data } = useQuery(GET_AUTHORIZED_USER);
  console.log(data)
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/' buttonText='Repositories' />
        {!data?.authorizedUser && (
          <AppBarTab link='/login' buttonText='Sign in' />
        )}
      {data?.authorizedUser && <SignOutTab />}
      </ScrollView>
    </View>
  );
};

export default AppBar;