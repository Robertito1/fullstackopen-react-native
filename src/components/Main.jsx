import React from 'react';
import {View, StyleSheet} from 'react-native'
import AppBar from './Appbar';
import RepositoryList from './RepositoryList';
import theme from '../theme';


import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: theme.colors.mainBackground,
    },
  });
const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar/>
    <Switch>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
    </Switch>
    </View>
    )
};

export default Main;