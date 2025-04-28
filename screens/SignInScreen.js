import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.replace('BottomTab');
  };

  const handleCreateAccount = () => {
    navigation.replace('BottomTab'); 
  };

  return (
    <View style={styles.container}>
        <Text style={styles.info}>(For now, you can proceed by clicking any of the given buttons without entering the details)</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.btnCont}>
       <Text>Forgot Password</Text>
        <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText} onPress={handleSignIn}>
               Log In
            </Text>
         </TouchableOpacity>
      
        <TouchableOpacity style={styles.nextButton} onPress={handleCreateAccount} >
             <Text style={styles.nextButtonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  createAccountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#92C93D',
    padding: 10,
    marginVertical: 10,
    borderRadius: 2,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  btnCont:{
    alignItems:"center",
    marginTop:20
  },
  info:{
    fontSize:12,
    margin:10,
    color:"#92C93D"
  }
});

export default SignInScreen;
