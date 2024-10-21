import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleHeader';

export default function Header() {
    return (
      <View style={styles.header}>
        <View style={styles.userSection}>
          <Image source={require('../assets/user-icon.png')} style={styles.userIcon} />
        </View>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon}>
            <Feather name="eye" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="help-circle" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
}