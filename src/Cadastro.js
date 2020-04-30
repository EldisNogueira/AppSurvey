import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class Cadastro extends Component() {
  render() {
    return (
      <View style={estilo.container}>
        <Text>Cadastro Screen</Text>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container:{flex: 1, alignItems: 'center', justifyContent: 'center' },
  
});