import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
//import services from '../lists/Services';
import styles from '../styles/StyleServiceList';

export default function ServiceList({ services, navigation }) {

  return (
    <FlatList
      data={services}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.servicesList}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.serviceItem} onPress={item.action}>
          <View style={styles.iconContainer}>
            <Feather name={item.icon} size={24} color="#8A05BE" />
          </View>
          <Text style={styles.serviceText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
