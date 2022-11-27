import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title='Screen1'
        color='#841584'
        accessibilityLabel='Boton Screen1'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
