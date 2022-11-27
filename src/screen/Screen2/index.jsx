import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title='Screen2'
        color='#841584'
        accessibilityLabel='Boton Screen2'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
