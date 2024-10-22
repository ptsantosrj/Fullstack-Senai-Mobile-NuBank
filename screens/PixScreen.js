import React, { useState } from 'react';
import { Text, Button, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/StylePixScreen';

export default function PixScreen({ route, navigation }) {
  const { handlePixTransfer } = route.params;
  const [amount, setAmount] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const people = ['Patrick', 'Arthur', 'Adriana', 'Diana'];

  const handleTransfer = () => {
    if (amount && selectedPerson) {
      handlePixTransfer(parseFloat(amount));
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Escolha um contato:</Text>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedPerson(item)} style={[styles.person, selectedPerson === item && styles.selectedPerson]}>
            <Text style={styles.personText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Digite o valor a ser transferido"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Transferir" onPress={handleTransfer} />
    </ScrollView>
  );
}

