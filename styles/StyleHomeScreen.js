import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    paddingTop: 20,
    paddingHorizontal: 20,
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