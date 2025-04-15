import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profileStyle';

const ProfileDetails = ({ bio }) => (
  <View style={styles.detailsContainer}>
    <Text style={styles.label}>NPM: <Text style={styles.value}>{bio.identity.npm}</Text></Text>
    <Text style={styles.label}>Email: <Text style={styles.value}>{bio.email}</Text></Text>
    <Text style={styles.label}>No HP: <Text style={styles.value}>{bio.mobile_phone}</Text></Text>
    <Text style={styles.label}>Jenis Kelamin: <Text style={styles.value}>{bio.gender === 'M' ? 'Laki-laki' : 'Perempuan'}</Text></Text>
    <Text style={styles.label}>Tinggi / Berat: <Text style={styles.value}>{bio.tall_body} cm / {bio.weight_body} kg</Text></Text>

    <Text style={[styles.label, { marginTop: 12 }]}>Riwayat Pendidikan:</Text>
    {bio.educations.map((edu) => (
      <Text key={edu.id} style={styles.value}>• {edu.school}</Text>
    ))}
  </View>
);

export default ProfileDetails;
