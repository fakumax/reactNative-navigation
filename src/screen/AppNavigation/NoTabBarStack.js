import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { SettingScreen } from '../TabHome/SettingScreen';

const screenOptionStyle = {
  headerStyle: {
    elevation: 0, //Elimina la linea del header Android
    shadowColor: 'transparent', //Elimina la linea del header IOS
    // cardStyle: {
    //   backgroundColor: APP_COLOR_SECONDARY,
    // },
    // header: { visible: false },
    headerMode: 'screen',
    // title: '',
  },
  headerTransparent: false,
  // headerTitle: 'LOGIN',
  // headerLeft : null,
  // headerRight: null,
  // headerTintColor: APP_WHITE,
  // navigationOptions:{
  //   title: 'Header title'
  // }
};

const NoTabBarStack = () => {
  return (
    <Stack.Navigator

    // screenOptions={screenOptionStyle}
    >
      {/* <Stack.Screen name='Login' component={Login} options={{ title: '', headerMode: 'none' }}/> */}
      <Stack.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={{
          headerShown: true,
          tabBarStyle: { display: 'none' },
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NoTabBarStack;
