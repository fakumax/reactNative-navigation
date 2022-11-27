import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

/* React Navigation */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { SettingScreen } from './SettingScreen';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('SettingsHome')}
        title='HOME'
        color='#841584'
        accessibilityLabel='Boton Home'
      />
      <StatusBar style='auto' />
    </View>
  );
};

const TabHome = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      options={{
        headerShown: true,
        tabBarStyle: { display: 'none' },
        tabBarVisible: false,
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === 'SettingsHome') {
              return { display: 'none' };
            }
            return;
          })(route),
        })}
      />
      <Stack.Screen
        name='SettingsHome'
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

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
