import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './ImageFilterProcessing/Main'
import ApplyFilter from './ImageFilterProcessing/ApplyFilter'

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Apply Filter" component={ApplyFilter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;