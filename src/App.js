import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>new Container</Text>
      <Text>Black</Text>
    </View>
  );  
}    

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
