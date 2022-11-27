import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

/* React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title='Profile'
        color='#841584'
        accessibilityLabel='Boton Profile'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title='Setting'
        color='#841584'
        accessibilityLabel='Boton Home'
      />
      <StatusBar style='auto' />
    </View>
  );
};

const TabProfile = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='ProfileScreen'
      //screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='ProfileScreen' component={Profile} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
};

export default TabProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
