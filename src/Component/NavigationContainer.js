import React from 'react';
import { ThemeProvider } from './path_to_your/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import YourAppNavigator from './path_to_your/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <YourAppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
