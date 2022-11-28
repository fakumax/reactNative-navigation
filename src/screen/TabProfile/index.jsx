import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

/* React Navigation */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const TabProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          navigation.navigate('NoTabBar', { screen: 'SettingProfile' })
        }
        title='PROFILE'
        color='#841584'
        accessibilityLabel='Boton Profile'
      />
      <StatusBar style='auto' />
    </View>
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
