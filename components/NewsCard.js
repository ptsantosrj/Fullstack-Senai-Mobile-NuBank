import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleNewsCard';
import news from '../lists/news';
import { useRef, useEffect } from 'react';
import { FlatList } from 'react-native-web';
import Animated from 'react-native-reanimated';

const NewsCard = () => {
   
  const flatListRef = useRef(null)
  const [ currentIndex, setCurrentIndex ]= useState(0);

  useEffect( () => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= news.length) {
        nextIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index:nextIndex, Animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, news.length]
  );

    return (
        <FlatList
        data={news}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        //contentContainerStyle={styles.carouselContainer}
        ref={flatListRef}

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
