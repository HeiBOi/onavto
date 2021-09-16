import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './pages/home';
import HomePage from './pages/HomePage';
import Cars from './HomePage/Cars';
import categoriesData from './HomePage/data/categoriesData'
import CarDetails from './CarPage/CarDetails';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#151515", 
    shadowOffset: { height: 0, width: 0 },
    headerHideShadow: true,
    elevation: 0,
  },
  headerTitleStyle: {color: "#fff", fontWeight: '600'},
  headerTintColor: "#fff",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Online Auto" component={home} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="Details" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    width: '100%',
  },
});
