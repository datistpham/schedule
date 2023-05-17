import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập
  };

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 18, fontWeight: "600", marginBottom: 16, marginTop: 12}}>Đăng nhập</Text>
      <TextInput
        style={{borderStyle: "solid", borderRadius: 10, borderColor: "#000", height: 40, borderWidth: 1, padding: 10}}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={{margin: 12}}></View>
      <TextInput
        style={{borderStyle: "solid", borderRadius: 10, borderColor: "#000", height: 40, borderWidth: 1, padding: 10}}

        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={{margin: 12}}></View>
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;