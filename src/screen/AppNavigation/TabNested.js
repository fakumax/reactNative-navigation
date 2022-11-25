import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/* React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '../Home';

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

export const TabNestedSupport = () => {
  return <div>TabNestedSupport</div>;
};

export const TabNestedHome = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='HomeScreen' component={Home} />
      {/* <Stack.Screen name='Settings' component={Settings} /> */}
    </Stack.Navigator>
  );
};

export const TabNestedProfile = () => {
  return <div>TabNestedHome</div>;
};
