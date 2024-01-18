import { FontAwesome, Ionicons ,MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavScreenOptions } from '@hoddy-ui/core';
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import CustomDrawerScreen from '../components/drawer/CustomDrawerPage';
import { ACCOUNTINGREPORT, CREDENTIALS, KNOWLEDGEBASE_SCREEN, MISSION_SCREEN, MYPROFILE } from '../generic/routes';
import Credentials from '../screens/tabs/Credentials';
import Mission from '../screens/tabs/Mission';
import Profile from '../screens/drawers/Profile';
import TabNavigation from './TabNavigation';
import KnowledgeBase from "../screens/drawers/KnowledgeBase";
import AccountingReports from "../screens/drawers/AccountingReports";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    const options = useNavScreenOptions("drawer");
  return (
<>
<Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerScreen {...props} />}
      screenOptions={{
        ...options,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon(props) {
            return <Ionicons name="home-outline" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name={MYPROFILE}
        component={Profile}
        options={{
          drawerIcon(props) {
            return <FontAwesome name="user"  {...props} />;
          },
        }}
      />
   
  
      <Drawer.Screen
      
        name={ACCOUNTINGREPORT}
        component={AccountingReports}
        options={{
          
          drawerIcon(props) {
            return <MaterialIcons name="center-focus-strong"  {...props} />;
          },
        }}
      />
      <Drawer.Screen
      
        name={KNOWLEDGEBASE_SCREEN}
        component={KnowledgeBase}
        options={{
          
          drawerIcon(props) {
            return <MaterialCommunityIcons name="bookshelf"  {...props} />;
          },
        }}
      />
      </Drawer.Navigator>
</>
  )
}

export default DrawerNavigation