import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleNewsCard';
import news from '../lists/news';

const NewsCard = () => {
    
    return (
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
        >
          {news.map((item) => (
            <View key={item.id} style={styles.newsCard}>
              <View style={styles.carouselContainer}>
                <Feather name={item.icon} size={20} color="#8A05BE" style={styles.newsIcon} />
                <Text style={styles.newsTitle}>{item.title}</Text>
              </View>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
    );
};

export default NewsCard;
