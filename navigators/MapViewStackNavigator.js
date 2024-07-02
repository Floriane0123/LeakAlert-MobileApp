import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapViewScreen from '../screens/MapViewScreen';

const Stack = createStackNavigator();

const MapViewStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapView" component={MapViewScreen} />
    </Stack.Navigator>
  );
};

export default MapViewStackNavigator;
