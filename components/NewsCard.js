import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/StyleNewsCard';
import news from '../lists/news';
import { useRef, useEffect } from 'react';

const NewsCard = () => {

  const scrollViewRef = useRef(null);
  const scrollInterval = 3000;
  let scrollPosition = 0;
  
    useEffect(() => {
      const totalNews = news.length;
  
      const interval = setInterval(() => {
        if (scrollViewRef.current) {
          scrollPosition += 1;
          
          if (scrollPosition >= totalNews) {
            scrollPosition = 0;
          }
          scrollViewRef.current.scrollTo({ x: scrollPosition * 300, animated: true });
        }
      }, scrollInterval);
  
      return () => clearInterval(interval); 
    }, []);
    
    return (
        <ScrollView
          ref={scrollViewRef}
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
