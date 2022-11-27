import React from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';

const Screen4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title='Screen4'
        color='#841584'
        accessibilityLabel='Boton Screen4'
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
