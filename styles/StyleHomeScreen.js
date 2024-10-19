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
});
 
  export default styles;