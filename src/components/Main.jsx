import React from 'react';
import {View, StyleSheet} from 'react-native'
import AppBar from './Appbar';
import RepositoryList from './RepositoryList';
import Repository from './Repository';
import theme from '../theme';


import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import CreateReview from './createReview';
import SignUp from './signUp';
import MyReviews from './MyReviews';

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
        <Route path='/my-reviews' exact>
          <MyReviews />
        </Route>
        <Route path='/sign-up' exact>
          <SignUp />
        </Route>
        <Route path='/create-review' exact>
          <CreateReview />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path='/:id' exact>
          <Repository />
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