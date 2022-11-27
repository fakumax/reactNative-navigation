import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabHome from '../TabHome';
import TabProfile from '../TabProfile';
import TabSupport from '../TabSupport';
//import { TabNestedHome } from './TabNested';
const Tab = createBottomTabNavigator();

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
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen
        name='Inicio'
        component={TabHome}
        options={{ headerShown: false }}
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
