// components/TextBox.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBox = () => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.header}>History of Bicycle</Text>
      <Text style={styles.paragraph}>
        A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or
        motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
        to a frame, one behind the other.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#8B0000',
    color: '#fff',
    padding: 8,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
});

export default TextBox;
