// components/ImageBox.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageBox = () => {
  return (
    <Image
      source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#ffe4b5',
  },
});

export default ImageBox;
