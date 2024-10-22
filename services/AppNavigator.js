import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PixScreen from '../screens/PixScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    
    <Stack.Navigator initialRouteName="Nubank">
      <Stack.Screen name="Nubank" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Área Pix" component={PixScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
