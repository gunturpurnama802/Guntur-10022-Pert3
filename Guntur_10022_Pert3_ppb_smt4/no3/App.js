import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import styles from './styles/profileStyle';
import ProfileHeader from './components/ProfileHeader';
import ProfileDetails from './components/ProfileDetails';

// Data Profil
const MyBio = {
  identity: {
    npm: 212310056,
    firstname: "MUHAMMAD",
    middlename: "ZIDAN",
    lastname: "AKBAR",
  },
  educations: [
    { id: 1, school: "SDN 1 Kota Bogor" },
    { id: 2, school: "SMPN 1 Kota Bogor" },
    { id: 3, school: "SMAN 1 Kota Bogor" },
  ],
  mobile_phone: "0812345679",
  email: "212310056@student.ibik.ac.id",
  gender: 'M',
  tall_body: 175,
  weight_body: 64.5
};

export default class App extends Component {
  render() {
    const fullName = `${MyBio.identity.firstname} ${MyBio.identity.middlename} ${MyBio.identity.lastname}`;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2b2d42" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ProfileHeader name={fullName} />
          <ProfileDetails bio={MyBio} />
        </ScrollView>
      </View>
    );
  }
}
