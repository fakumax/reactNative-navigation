import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const TabHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('TabHome')}
        title='Enter in Home'
        color='#841584'
        accessibilityLabel='Boton TabHome'
      />
      {/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}

      <StatusBar style='auto' />
    </View>
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
