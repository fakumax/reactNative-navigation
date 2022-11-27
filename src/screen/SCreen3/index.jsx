import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title='Screen3'
        color='#841584'
        accessibilityLabel='Boton Screen3'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
