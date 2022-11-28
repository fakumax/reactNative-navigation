import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

/* React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import FirstScreen from './src/screen/Login';

import TabNavigator from './src/screen/AppNavigation/TabNavigator.js';
import NoTabBarStack from './src/screen/AppNavigation/NoTabBarStack';
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='InitialScreen'
        screenOptions={screenOptionStyle}
      >
        <Stack.Screen name='InitialScreen' component={FirstScreen} />
        <Stack.Screen
          name='TabHome'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='NoTabBar' component={NoTabBarStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
