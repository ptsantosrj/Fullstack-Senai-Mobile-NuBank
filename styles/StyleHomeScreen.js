import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingBottom: '200px'
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
  balance: {
    fontSize: 24,
    color: '#000',
  },
  servicesList: {
    paddingVertical: 20,
  },
  serviceItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    padding: 10,
  },
  serviceText: {
    marginTop: 5,
    color: '#fffff',
    textAlign: 'center',
  },
});
 
  export default styles;