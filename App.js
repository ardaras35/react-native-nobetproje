// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import './src/i18n/index';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}