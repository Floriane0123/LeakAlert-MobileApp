import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SensorManagementScreen from '../screens/SensorManagementScreen';

const Stack = createStackNavigator();

const SensorManagementStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SensorManagement" component={SensorManagementScreen} />
    </Stack.Navigator>
  );
};

export default SensorManagementStackNavigator;