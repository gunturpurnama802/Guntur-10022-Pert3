// App.js
import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>History of Bicycle</Text>
        <Text style={styles.paragraph}>
          A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or
          motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
          to a frame, one behind the other.
        </Text>
        <Image
          source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF3E0', // krem hangat
  },
  card: {
    width: 320,
    backgroundColor: '#FFE4C4', // beige retro
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#A52A2A', // merah bata
    color: '#FFF8F0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    textAlign: 'center',
    borderRadius: 8,
    marginBottom: 15,
    fontFamily: 'serif',
    letterSpacing: 1,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 15,
    color: '#5C4033', // coklat tua
    marginBottom: 20,
    lineHeight: 22,
    fontFamily: 'Georgia',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#FFDAB9', // peach retro
    borderWidth: 2,
    borderColor: '#CD853F',
  },
});

export default App;
