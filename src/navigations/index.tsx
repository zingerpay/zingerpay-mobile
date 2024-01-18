import React from 'react'
import {View} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/tabs/Home';
import { ADDAVAILABLECREDENTIALS, DRAWERNAVIGATION, HOME_SCREEN, LOGIN_SCREEN, POSTJOURNALENTRY, RESETPASSWORD_SCREEN, TABNAVIGATION } from '../generic/routes';
import { NavigationContainer } from '@react-navigation/native';
import { useNavScreenOptions } from '@hoddy-ui/core';
import Login from '../screens/auth/Login';
import ResetPassword from '../screens/auth/ResetPassword';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import AddAvaliable from '../screens/credentials/AddAvaliable';
import PostJournalEntry from '../screens/accounting/PostJournalEntry';

function AppNavigator() {
const Stack = createStackNavigator();
const options = useNavScreenOptions("stack");
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ ...options }}>
      <Stack.Screen name={LOGIN_SCREEN} component={Login}/>
      <Stack.Screen name={RESETPASSWORD_SCREEN} component={ResetPassword}/>
 
    <Stack.Screen name={DRAWERNAVIGATION} component={DrawerNavigation}/>
    <Stack.Screen name={ADDAVAILABLECREDENTIALS} component={AddAvaliable}/>
    <Stack.Screen name={POSTJOURNALENTRY} component={PostJournalEntry}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator