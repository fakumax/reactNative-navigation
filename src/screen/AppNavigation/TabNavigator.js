import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabHome from '../TabHome';
import TabProfile from '../TabProfile';
import TabSupport from '../TabSupport';
//import { TabNestedHome } from './TabNested';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Inicio':
      return 'News Home';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

const screenOptionStyle = {
  title: '',
  headerStyle: {
    elevation: 0, //Elimina la linea del header Android
    shadowColor: 'transparent', //Elimina la linea del header IOS
    backgroundColor: 'transparent',
    height: 0,
  },
  headerShown: false,
  //headerMode: 'none',
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: true,
      })}
    >
      <Tab.Screen
        name='Inicio'
        component={TabHome}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerShown: true,
        })}
      />
      <Tab.Screen
        name='Soporte'
        component={TabSupport}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Perfil'
        component={TabProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
