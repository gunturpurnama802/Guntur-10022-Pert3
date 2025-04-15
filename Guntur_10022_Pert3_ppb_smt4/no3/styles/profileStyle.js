import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    backgroundColor: '#2b2d42',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  value: {
    fontWeight: 'normal',
    color: '#555',
  },
});
