// DashboardScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility

  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Toggle menu visibility
  };

  const goToSection = (section) => {
    if (section === 'Dashboard') {
      navigation.navigate('Dashboard');
    } else if (section === 'MapView') {
      navigation.navigate('MapView');
    } else if (section === 'LeakageReport') {
      navigation.navigate('LeakageReport');
    } else if (section === 'SensorManagement') {
      navigation.navigate('SensorManagement');
    } else if (section === 'Settings') {
      navigation.navigate('Settings');
    } else if (section === 'Help') {
      navigation.navigate('Help');
    } else if (section === 'SignOut') {
      handleSignOut();
    }
    setMenuVisible(false); // Close menu after navigation
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon for Menu */}
      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleMenu}>
        <Text style={styles.hamburgerText}>=</Text>
      </TouchableOpacity>

      {/* Collapsible Menu Panel */}
      {menuVisible && (
        <View style={styles.menuPanel}>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('Dashboard')}>
            <Text style={styles.menuText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('MapView')}>
            <Text style={styles.menuText}>Map View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('LeakageReport')}>
            <Text style={styles.menuText}>Leakage Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('SensorManagement')}>
            <Text style={styles.menuText}>Sensor Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('Settings')}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => goToSection('Help')}>
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleSignOut}>
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Dashboard Overview</Text>
        
        {/* Summary Cards */}
        <View style={styles.summaryCard}>
          <Text style={styles.cardText}>Active Leaks: 5</Text>
          <Text style={styles.cardText}>Sensors Status: 3 On, 2 Off</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Turn On All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Turn Off All</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Alerts */}
        <View style={styles.recentAlerts}>
          <Text style={styles.alertTitle}>Recent Alerts</Text>
          <TouchableOpacity style={styles.alert}>
            <Text style={styles.alertText}>Alert 1: Location, Severity, Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alert}>
            <Text style={styles.alertText}>Alert 2: Location, Severity, Time</Text>
          </TouchableOpacity>
          {/* Add more alerts as needed */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Main axis as row for left-side menu
    backgroundColor: '#e0f7fa', // Light blue background
  },
  hamburgerIcon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0277bd', // Dark blue background for icon
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    left: 0,
    top: 20,
    zIndex: 1, // Ensure it's above other elements
  },
  hamburgerText: {
    fontSize: 24,
    color: '#fff', // White hamburger icon color
  },
  menuPanel: {
    backgroundColor: '#0277bd', // Dark blue menu panel background
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    top: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 2, // Ensure it's above other elements
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White menu text
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginLeft: 50, // Adjusted to give space for the menu
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#01579b', // Dark blue title text
  },
  summaryCard: {
    backgroundColor: '#81d4fa', // Light blue card background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#01579b', // Dark blue text
  },
  actionButton: {
    backgroundColor: '#0277bd', // Dark blue action button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White button text
  },
  recentAlerts: {},
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#01579b', // Dark blue alert title text
  },
  alert: {
    backgroundColor: '#0288d1', // Blue alert background
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  alertText: {
    color: '#fff', // White alert text
    fontSize: 16,
  },
});
