import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profileStyle';

const ProfileHeader = ({ name }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{name}</Text>
  </View>
);

export default ProfileHeader;
