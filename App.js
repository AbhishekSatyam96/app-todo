import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './redux/store';
import { Provider } from 'react-redux';

import Login from './screens/login';
import TodoList from './screens/todoList';
import TodoForm from './screens/todoForm';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="TodoForm" component={TodoForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}