import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from '../screens/HelpScreen';

const Stack = createStackNavigator();

const HelpStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
};

export default HelpStackNavigator;