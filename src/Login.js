import * as React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioGroup} from 'react-native-btr';
import {Button} from 'react-native-elements';

export default class Login extends Component() {
  constructor() {
    super();
    this.state = {
      radioButtons: [
        {
          label: 'Administrador',
          value: 'Adm',
          checked: true,
          color: '#000000',
          disabled: false,
          flexDirection: 'row',
          size: 10,
        },
        {
          label: 'Pesquisador',
          value: 'Pesq',
          checked: false,
          color: '#000000',
          disabled: false,
          flexDirection: 'row',
          size: 10,
        },
      ],
    };
  }

  render() {
    let selectedItem = this.state.radioButtons.find(e => e.checked === true);
    selectedItem = selectedItem
      ? selectedItem.value
      : this.state.radioButtons[0].value;

    return (
      <View style={estilo.contView}>
        <Text style={estilo.titleLogo}>MOBLIT</Text>
        <Text style={estilo.titleSub}>pesquisas</Text>

        <View style={estilo.contViewInput}>
          <TextInput
            style={estilo.inputTexts}
            placeholder="USUÁRIO"
            placeholderTextColor="#0AA363"
            keyboardType="email-address"
            returnKeyType="next"
          />

          <TextInput
            style={estilo.inputTexts}
            placeholder="SENHA"
            placeholderTextColor="#0AA363"
            keyboardType="visible-password"
            returnKeyType="search"
          />

          <TouchableOpacity style={estilo.containerButtomEnviar}>
            <Text style={estilo.containerEnviarText}>ENTRAR</Text>
          </TouchableOpacity>

          <View style={estilo.contPerfil}>
            <Text style={estilo.contPerfilText}>Selecione o seu perfil</Text>
          </View>
          <View style={estilo.MainContainer}>
            <RadioGroup
              color="#0AA363"
              radioButtons={this.state.radioButtons}
              onPress={radioButtons => this.setState({radioButtons})}
              style={estilo.radioB}
            />
            <View style={estilo.selectedItemView}>
              <Text style={estilo.selectedText}>
                Selected Item: {selectedItem}
              </Text>
            </View>
          </View>
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: '45%',
                height: '1%',
                borderWidth: 1,
                borderColor: '#DCDCDC',
              }}
            />
            <Text style={{fontSize: 18, color: '#696969', padding: 5}}>ou</Text>
            <View
              style={{
                width: '45%',
                height: '1%',
                borderWidth: 1,
                borderColor: '#DCDCDC',
              }}
            />
          </View>

          <Button
            title="CADASTRE-SE"
            type="clear"
            titleStyle={{color: 'black', fontSize: 18}}
          />
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
  },
  selectedItemView: {
    justifyContent: 'center',
  },
  selectedText: {
    fontSize: 17,
  },
  contView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    alignItems: 'center',
  },

  titleLogo: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  titleSub: {alignItems: 'center', fontSize: 14, marginLeft: 60},

  contViewInput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingTop: 20,
    paddingRight: 10,
  },

  inputTexts: {
    marginTop: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0AA363',
    borderRadius: 10,
  },

  radioB: {
    fontSize: 16,
    paddingTop: 5,
  },

  containerButtomEnviar: {
    width: '100%',
    height: '12%',
    backgroundColor: '#0AA363',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerEnviarText: {fontSize: 14, color: '#FFF'},

  contPerfil: {paddingTop: 40},
  contPerfilText: {fontSize: 20, fontWeight: 'bold'},
});
