import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';

function Rnvoice(props){
  const handleVoice = ttsText => {
    Tts.speak(ttsText);
  };
  return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => handleVoice('bruh')}>
          bruh
        </Text>
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
  text: {
    fontSize: 22,
  }
});
export default Rnvoice;
