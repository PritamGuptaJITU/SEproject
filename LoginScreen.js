import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' }}>
      {/* <Image source={require('./logo.png')} style={{ width: 150, height: 150, marginBottom: 20 }} /> */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>StockMaster</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Your Email"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginBottom: 20 }}
        onPress={() => {
          // Handle login action
        }}
      >
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
        onPress={() => {
          // Handle social login action
        }}
      >
        <Text style={{ marginRight: 10 }}>Or social login</Text>
        {/* <Image source={require('./google-icon.png')} style={{ width: 24, height: 24 }} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Navigate to sign-up screen
        }}
      >
        <Text style={{ color: '#007BFF' }}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20, color: 'gray', fontSize: 12 }}>I accept App's Terms of Use and Privacy Policy.</Text>
    </View>
  );
};

export default LoginScreen;