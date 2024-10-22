import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import NewsCard from '../components/NewsCard';
import { Feather } from '@expo/vector-icons'
import styles from '../styles/StyleHomeScreen';
import services from '../lists/Services';
import news from '../lists/news';
import NoticeCard from '../components/NoticeCard';
import ServiceList from '../services/ServiceList';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {

  const [balance, setBalance] = useState(1000);

  const handlePixTransfer = (amount) => {
    setBalance(balance - amount);
  };

  const servicesWithNavigation = services.map(service => {
    if (service.name === 'Área Pix') {
      return {
        ...service,
        action: () => navigation.navigate('Área Pix', { handlePixTransfer }),
      };
    }
    return {
      ...service,
      action: () => {} 
    };
  });

  return (
    <ScrollView >
      <View style={styles.container}>

        <Header />

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Conta</Text> 
          <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
          <ServiceList services={servicesWithNavigation} navigation={navigation} />
          <Card title="Meus Cartões" backgroundColor= "#d3d3d3" icon="credit-card">
          </Card>
          <NewsCard news={news} />
        </View>
        
        <View>
        <NoticeCard title="Próximo pagamento" message="Quarta-feira, 06 Nov" />
        </View>
        <View>
        <NoticeCard title="Cartão de crédito" message="Fatura atual" value="R$ 2.000,00" limitfree="Limite disponível de R$ 500,00" />
        </View>
        <View>
        <NoticeCard title="Empréstimos" message="valor disponível de até" value="R$ 30.000,00" />
        </View>
        <View>
        <NoticeCard title="Descubra Mais" message="mais acoes" />
        </View>
      </View>
    </ScrollView>
  );
}