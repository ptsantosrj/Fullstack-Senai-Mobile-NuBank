import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleNewsCard';
import news from '../lists/news';
import { useRef, useEffect } from 'react';
import { FlatList } from 'react-native-web';

const NewsCard = () => {
   
    return (
        <FlatList
        data={news}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        //contentContainerStyle={styles.newsCard}
        renderItem={({ item }) => (
            <View key={item.id} style={styles.newsCard}>
              <View style={styles.carouselContainer}>
                <Feather name={item.icon} size={20} color="#8A05BE" style={styles.newsIcon} />
                <Text style={styles.newsTitle}>{item.title}</Text>
              </View>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          )}
        />
    );
}

export default NewsCard;
