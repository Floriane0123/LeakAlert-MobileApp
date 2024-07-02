import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardStackNavigator from './navigators/DashboardStackNavigator';
import MapViewStackNavigator from './navigators/MapViewStackNavigator';
import LeakageReportStackNavigator from './navigators/LeakageReportStackNavigator';
import SensorManagementStackNavigator from './navigators/SensorManagementStackNavigator';
import SettingsStackNavigator from './navigators/SettingsStackNavigator';
import HelpStackNavigator from './navigators/HelpStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
      <Drawer.Screen name="MapView" component={MapViewStackNavigator} />
      <Drawer.Screen name="LeakageReport" component={LeakageReportStackNavigator} />
      <Drawer.Screen name="SensorManagement" component={SensorManagementStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="Help" component={HelpStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
