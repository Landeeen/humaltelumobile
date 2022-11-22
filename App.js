import * as React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Profile from './pages/Profile'
import Play from './pages/Play'
import ConfigurePlay from './pages/ConfigurePlay'

const Stack = createNativeStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="ConfigurePlay" component={ConfigurePlay} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
})
