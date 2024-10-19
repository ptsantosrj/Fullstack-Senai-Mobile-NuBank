import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { Feather } from '@expo/vector-icons'
import styles from '../styles/StyleHomeScreen';
//import services from '../components/Services';

export default function HomeScreen({ navigation }) {
  const [balance, setBalance] = useState(1000);

  const handlePixTransfer = (amount) => {
    setBalance(balance - amount);
  };

  const services = [
    { id: '1', name: 'Área Pix', icon: 'dollar-sign', action: () => navigation.navigate('Pix', { handlePixTransfer }) },
    { id: '2', name: 'Pagar', icon: 'credit-card' },
    { id: '3', name: 'Empréstimo', icon: 'trending-up' },
    { id: '4', name: 'Transferir', icon: 'send' },
    { id: '5', name: 'Recarga Celular', icon: 'smartphone' },
    { id: '6', name: 'Depositar', icon: 'arrow-down-circle' },
    { id: '7', name: 'Cobrar', icon: 'arrow-up-circle' },
    { id: '8', name: 'Caixinhas', icon: 'box' },
    { id: '9', name: 'Investir', icon: 'bar-chart-2' },
  ];

  return (
    <View style={styles.container}>
      <section>
        <Header />
      </section>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Card title="Saldo">
            <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
          </Card>
          <FlatList
            data={services}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.serviceItem} onPress={item.action}>
                <View style={styles.iconContainer}>
                  <Feather name={item.icon} size={24} color="#8A05BE" />
                </View>
                <Text style={styles.serviceText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesList}
          />
          <Card title="Cartões" backgroundColor="#d3d3d3" icon="credit-card">
            <Text>Você ainda não adicionou cartões.</Text>
          </Card>
          <Card title="Carrossel Noticias" backgroundColor="#d3d3d3">

          </Card>
        </ScrollView>
      </View>
    </View>
  );
}