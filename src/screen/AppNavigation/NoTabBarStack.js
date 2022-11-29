import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { SettingScreen } from '../TabHome/SettingScreen';
import { SettingsProfile } from '../TabProfile/SettingsProfile';
import { Image, Button } from 'react-native';

const screenOptionStyle = {
  headerStyle: {
    elevation: 20, //Elimina la linea del header Android
    shadowColor: 'red', //Elimina la linea del header IOS
    // cardStyle: {
    //   backgroundColor: APP_COLOR_SECONDARY,
    // },
    // //headerMode: 'screen',
    title: '',
  },
  //headerLeft: (props) => <LogoTitle {...props} />,
  headerTransparent: false,
  ///////////////////////////
  headerRight: () => <Button title='Update count' />,
  //headerTitle: 'LOGIN',
  // headerLeft : null,
  //   headerTintColor: 'blue',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'blue',
  },
  // navigationOptions:{
  //   title: 'Header title'
  // }
};

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: 'https://1drv.ms/u/s!AiyE3dAIjI8lgRtQot0nBaNTeCLb?e=O2r7fz',
      }}
    />
  );
}

const NoTabBarStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name='Login' component={Login} options={{ title: '', headerMode: 'none' }}/> */}
      <Stack.Screen
        name='SettingScreen'
        component={SettingScreen}
        //options={{
        //headerShown: true,
        //   tabBarStyle: { display: 'none' },
        //   tabBarVisible: false,
        //}}
      />
      <Stack.Screen
        name='SettingProfile'
        component={SettingsProfile}
        options={{
          headerShown: true,
          //   tabBarStyle: { display: 'none' },
          //   tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NoTabBarStack;
