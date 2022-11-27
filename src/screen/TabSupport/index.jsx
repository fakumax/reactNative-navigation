import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

/* React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const Support = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title='Support'
        color='#841584'
        accessibilityLabel='Boton Support'
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

const TabSupport = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='SupportScreen'
      //screenOptions={screenOptionStyle}
    >
      <Stack.Screen name='SupportScreen' component={Support} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
};

export default TabSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
