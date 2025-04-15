// App.js
import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import TextBox from './components/TextBox';
import ImageBox from './components/ImageBox';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <TextBox />
          <ImageBox />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
  },
  card: {
    width: 320,
    backgroundColor: '#f5deb3',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
});

export default App;
