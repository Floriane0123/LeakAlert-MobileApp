import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeakageReportScreen from '../screens/LeakageReportScreen';

const Stack = createStackNavigator();

const LeakageReportStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LeakageReport" component={LeakageReportScreen} />
    </Stack.Navigator>
  );
};

export default LeakageReportStackNavigator;