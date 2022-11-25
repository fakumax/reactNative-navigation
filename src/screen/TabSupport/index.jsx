import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const TabSupport = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('TabSupport')}
        title='Enter in Support'
        color='#841584'
        accessibilityLabel='Boton TabSupport'
      />
      {/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}

      <StatusBar style='auto' />
    </View>
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
