import * as React from 'react';
import {Component} from 'react';
import {
  Container,
  View,
  Text,
  Title,
  Description,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioGroup} from 'react-native-btr';

export default class Login extends Component() {
  constructor() {
    super();
    this.state = {
      radioButtons: [
        {
          label: 'Eleições 2020 Alto do Moro',
          value: '2020AltoMoro',
          checked: true,
          color: '#000000',
          disabled: false,
          flexDirection: 'row',
          size: 10,
        },
        {
          label: 'Eleições 2020 Março',
          value: '2020Marco',
          checked: false,
          color: '#000000',
          disabled: false,
          flexDirection: 'row',
          size: 10,
        },
        {
          label: 'Eleições 2020 Abril',
          value: '2020Abril',
          checked: false,
          color: '#000000',
          disabled: false,
          flexDirection: 'row',
          size: 10,
        },
        {
          label: 'Eleições 2020 Maio',
          value: '2020Maio',
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
      <Container>
        <View>
          <View>
            <Icon name="perm-identity" size={35} color="#000" />
            <Text>João Vitor</Text>
          </View>
          <Title>20</Title>
          <Description>Pesquisas</Description>
          <Title>0</Title>
          <Description>Pesquisadores</Description>
        </View>
        <Text>Pesquisas Disponíveis</Text>
        <View style={estilo.contPerfil}>
          <Text style={estilo.contPerfilText}>Selecione o seu perfil</Text>
        </View>
        <View style={estilo.MainContainer}>
          <RadioGroup
            color="#0AA363"
            style={estilo.radioB}
            radioButtons={this.state.radioButtons}
            onPress={radioButtons => this.setState({radioButtons})}
          />
          <View style={estilo.selectedItemView}>
            <Text style={estilo.selectedText}>
              Selected Item: {selectedItem}
            </Text>
          </View>
        </View>
        <Description>
          Selecione uma das Pesquisas acima para responder
        </Description>
        <TouchableOpacity style={estilo.containerButtomIniciar}>
          <Text style={estilo.containerEnviarIniciar}>INICIAR PESQUISA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.containerButtomFinalizar}>
          <Text style={estilo.containerEnviarFinalizar}>FINALIZAR SESSÃO</Text>
        </TouchableOpacity>
      </Container>
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
  containerButtomIniciar: {
    width: '100%',
    height: '12%',
    backgroundColor: '#0AA363',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerEnviarIniciar: {
    fontSize: 14,
    color: '#FFF',
  },
  containerButtomFinalizar: {
    width: '100%',
    height: '12%',
    backgroundColor: '#FFF',
    borderColor: '#FF4040',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerEnviarFinalizar: {
    fontSize: 14,
    color: '#FF4040',
  },
  radioB: {
    fontSize: 16,
    paddingTop: 5,
  },
});
