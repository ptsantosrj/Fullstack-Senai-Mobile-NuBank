import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingBottom: '200'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 16, 
    marginHorizontal: 20,
    color: '#333',
  },
  balance: {
    fontSize: 15,
    color: '#000',
    marginHorizontal: 20,
  },
});
 
  export default styles;