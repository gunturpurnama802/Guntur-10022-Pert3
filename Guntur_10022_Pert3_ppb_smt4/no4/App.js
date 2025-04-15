import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Gambar di tengah  */}
      <Image
        source={require('./assets/logo.png')} 
        style={{ width: 100, height: 100 }}   
      />
      {/* Teks di bawah */}
      <Text style={{ color: 'white', marginTop: 20 }}>Loading...</Text> {/* 👈 INLINE */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080', // Ungu (warna dominan di splash screen)
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
