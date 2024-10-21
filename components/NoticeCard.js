import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/StyleNoticeCard';

const NoticeCard = ({ title, message, value, limitfree }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.limitfree}>{limitfree}</Text>
    </View>
  );
};

export default NoticeCard;
