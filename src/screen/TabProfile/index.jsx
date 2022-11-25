import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const TabProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('TabProfile')}
        title='Enter in Profile'
        color='#841584'
        accessibilityLabel='Boton TabProfile'
      />
      {/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}

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
