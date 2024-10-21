import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleHomeScreen';

export default function ServiceList({ services, navigation }) {

  return (
    <FlatList
      data={services}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.serviceItem} onPress={item.action}>
          <View style={styles.iconContainer}>
            <Feather name={item.icon} size={24} color="#8A05BE" />
          </View>
          <Text style={styles.serviceText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.servicesList}
    />
  );
}
