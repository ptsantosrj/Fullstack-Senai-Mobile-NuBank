import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import styles from '../styles/StyleAdvertisingCard';
import advertisingData from '../lists/Advertising';

const AdvertisingCard = () => {
  return (
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={advertisingData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            </View>
        )}
    />
  );
};

export default AdvertisingCard;