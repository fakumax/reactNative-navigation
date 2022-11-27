import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

/* React Navigation */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const SettingScreen = ({ navigation }) => {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
