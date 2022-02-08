import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Login from './src/screens/Auth/Login'

//Tab navigator
const Tab = createBottomTabNavigator();

//Stack navigator
const Auth = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Auth.Navigator screenOptions={{
        headerShown:false
      }}>
        <Auth.Screen name="Login" component={Login} />
      </Auth.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
