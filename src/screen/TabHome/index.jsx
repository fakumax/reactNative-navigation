import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const TabHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('ir a Home');
        }}
        title='Loguear e ir a stack'
        color='#841584'
        accessibilityLabel='Boton TabHome'
      />
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
