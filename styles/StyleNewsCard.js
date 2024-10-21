import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    carouselContainer: {
      flexDirection: 'row',

    },
    newsCard: {
      width: width * 0.9,
      marginHorizontal: 20,
      marginBottom: 15,
      backgroundColor: '#d3d3d3',
      borderRadius: 10,
      padding: 15,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    newsTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    newsDescription: {
      fontSize: 12,
      color: '#333',
      flexWrap: 'wrap',
      width: '100%',
      lineHeight: 18,
    },
    newsIcon: {
      marginRight: 10,
    },
  });

  export default styles;