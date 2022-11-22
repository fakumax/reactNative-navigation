import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('ir a stack');
        }}
        title='Loguear e ir a stack'
        color='#841584'
        accessibilityLabel='Boton login'
      />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
