import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import MyButton from './app/components/MyButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myView}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myView: {
    height: 100,
    width: 100,
    backgroundColor: 'dodgerblue',
    shadowColor: 'grey',
    shadowOffset: {width:  -5, height: -10},
    shadowOpacity: .4,
  }
});
