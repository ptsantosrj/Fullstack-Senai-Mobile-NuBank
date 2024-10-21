import React from 'react';
import { View, Text } from 'react-native';
import styles2 from '../styles/StyleCard';
import { Feather } from '@expo/vector-icons'

export default function Card({ title, children, backgroundColor, icon }) {
  return (
    <View style={[styles2.card, backgroundColor && { backgroundColor }]}>
      <View style={styles2.header}>
        {icon && <Feather name={icon} size={24} style={styles2.icon} />}
        <Text style={styles2.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}