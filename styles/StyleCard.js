import { StyleSheet, Dimensions } from "react-native";

const width2 = Dimensions.get('window').width;

const styles2 = StyleSheet.create({
  card: {
    width2: width2 * 0.90, 
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

  export default styles2;