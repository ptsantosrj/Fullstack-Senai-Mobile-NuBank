import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PixScreen from '../screens/PixScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Nubank">
      <Stack.Screen name="Nubank" component={HomeScreen} />
      <Stack.Screen name="Área Pix" component={PixScreen} />
    </Stack.Navigator>
  );
}
