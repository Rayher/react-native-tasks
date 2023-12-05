import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Test01 } from './components/test-01';
import { Test02 } from './components/test-02';

export default function App() {
  return (
    <View style={styles.container}>      
      <Test01 />
      {/*<Test02 />*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
