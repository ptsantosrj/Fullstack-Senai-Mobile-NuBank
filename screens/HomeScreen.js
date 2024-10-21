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
    <View style={styles.container}>
      <ScrollView>
      <section>
        <Header />
      </section>

      <section>
        <View style={styles.content}>
          <Card title="Conta">
            <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
          </Card>

          <ServiceList services={servicesWithNavigation} navigation={navigation} />

          <Card title="Meus Cartões" backgroundColor= "#d3d3d3" icon="credit-card">
          </Card>
            
          <NewsCard news={news} />
          
        </View>
      </section>

      <section>
      <NoticeCard title="Próximo pagamento" message="Quarta-feira, 06 Nov" />
      </section>

      <section>
      <NoticeCard title="Cartão de crédito" message="Fatura atual" />
      </section>

      <section>
      <NoticeCard title="Empréstimos" message="valor disponível de até" />
      </section>

      <section>
      <NoticeCard title="Descubra Mais" message="mais acoes" />
      </section>
      </ScrollView>
    </View>
  );
}