import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login process (replace with actual authentication logic if needed)
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 225, // Adjust the width of the logo as needed
    height: 150, // Adjust the height of the logo as needed
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    backgroundColor: '#fff', // White input background
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#003f5c', // Dark blue input text
    fontSize: 16,
    lineHeight: 24,
  },
  forgot: {
    color: '#fff', // White text
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#2980b9', // Darker blue login button
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
