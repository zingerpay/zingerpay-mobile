import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColors, useNavScreenOptions } from '@hoddy-ui/core';
import Home from '../screens/tabs/Home';
import { Ionicons} from '@expo/vector-icons';
import { CREDENTIALS, HOME_SCREEN, MISSION_SCREEN } from '../generic/routes';
import Mission from '../screens/tabs/Mission';
import Credentials from '../screens/tabs/Credentials';
function TabNavigation() {
    const Tabs = createBottomTabNavigator();
const options = useNavScreenOptions("tab");

    const colors = useColors()
  return (
<>
<Tabs.Navigator
        sceneContainerStyle={{
          backgroundColor: colors.white[1],
        }}
        screenOptions={{
          // tabBarShowLabel: false,

          ...options,
          tabBarActiveTintColor: colors.primary.main,
          tabBarItemStyle: {
            // backgroundColor: "#f90",
            alignSelf: "center",
          },
        }}
      >
            <Tabs.Screen
          name={HOME_SCREEN}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons
                name="home"
                color={props.color}
                size={props.size}
              />
            ),
          }}
        />
            <Tabs.Screen
          name={MISSION_SCREEN}
          component={Mission}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons
                name="home"
                color={props.color}
                size={props.size}
              />
            ),
          }}
        />
            <Tabs.Screen
          name={CREDENTIALS}
          component={Credentials}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons
                name="home"
                color={props.color}
                size={props.size}
              />
            ),
          }}
        />
      </Tabs.Navigator>
</>
  )
}

export default TabNavigation