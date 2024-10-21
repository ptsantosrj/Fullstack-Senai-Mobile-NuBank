import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#8A05BE',
    },
    userSection: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    userIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginBottom: 5,
    },
    greeting: {
      color: '#fff',
      fontSize: 18,
    },
    icons: {
      flexDirection: 'row',
    },
    icon: {
      marginLeft: 20,
      marginHorizontal: 20, //ver aqui pq nao consigo espacar os icones
    },
  });

  export default styles;