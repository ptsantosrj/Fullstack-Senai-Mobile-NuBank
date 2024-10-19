import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/StyleCard';
import { Feather } from '@expo/vector-icons'

export default function Card({ title, children, backgroundColor, icon }) {
  return (
    <View style={[styles.card, backgroundColor && { backgroundColor }]}>
      <View style={styles.header}>
        {icon && <Feather name={icon} size={24} style={styles.icon} />}
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}