import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import styles from '../styles/StyleHomeScreen';

export default function HomeScreen({ navigation }) {
  const [balance, setBalance] = useState(1000);

  const handlePixTransfer = (amount) => {
    setBalance(balance - amount);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Card title="Saldo">
            <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
          </Card>
          <Card title="Meus Cartões" backgroundColor="#d3d3d3" icon="credit-card">
          </Card>
          <Card title="Transações">
            <Button title="Enviar Pix" onPress={() => navigation.navigate('Pix', { handlePixTransfer })} />
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}
