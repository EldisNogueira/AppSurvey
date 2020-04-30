import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default class Splash extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={estilo.container}>

        <Text style={estilo.textOne}>MOBLIT</Text>
        <Text style={estilo.textTwo}>pesquisas</Text>

      </SafeAreaView>
    );
  }
}

const estilo = StyleSheet.create({

  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  textOne: { fontWeight: "bold", fontSize: 35 },
  textTwo: { fontSize: 14, marginLeft: 50 },

});