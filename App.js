import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Todo from './screens/todo';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Todo" component={Todo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}