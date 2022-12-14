import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('TabHome')}
        title='Loguear e ir a stack'
        color='#841584'
        accessibilityLabel='Boton login'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
