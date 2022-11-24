import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons'; //chevron-back

export default class CreateTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: '',
      description: '',
      image: '',
      city: "notDefined",//this.props.route.params.city,
      contact: "notDefined",//this.props.route.params.contact,
      address: "notDefined",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitleAndLogoContainer}>
          <Image
            style={styles.appIcon}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.appTitleText}>Trocando</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Ionicons name="arrow-undo" size={30} color="black" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        {/*<View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            marginTop: '50%',
          }}>
          <Text
            style={{
              fontSize: RFValue(50),
              color: 'purple',
              fontFamily: 'cursive',
            }}>
            Criar Troca
          </Text>
        </View>*/}

        <TextInput
          style={styles.textInput}
          placeholder={'Objeto'}
          placeholderTextColor={'yellow'}></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder={'Descrição'}
          placeholderTextColor={'red'}></TextInput>

        <View style={styles.textView}>
          <Text style={[{ color: "red" }, styles.textStyle]}>Contato: {this.state.contact}</Text>

          <TouchableOpacity>
            <Ionicons></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          <Text style={[{ color: "orange" }, styles.textStyle]}>Cidade: {this.state.city}</Text>

          <TouchableOpacity>
            <Ionicons></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.textView}>
          <Text style={[{ color: "yellow" }, styles.textStyle]}>Endereço: {this.state.address}</Text>

          <TouchableOpacity style={styles.modifyButton}>
            <Ionicons name="pencil" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABDEEF',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS !== 'web'
        ? Platform.OS === 'android'
          ? StatusBar.currentHeight
          : RFValue(35)
        : '',
  },
  appTitleText: {
    color: 'purple',
    fontSize: Platform.OS !== "web" ? RFValue(45) : RFValue(25),
    fontWeight: 'bold',
    fontFamily: 'cursive',
    backgroundColor: 'yellow',
    borderRadius: RFValue(20),
    height: '56px',
    marginTop: RFValue(6),
    marginBottom: RFValue(6),
  },
  appIcon: {
    backgroundColor: 'white',
    borderRadius: RFValue(35),
    margin: RFValue(6),
    width: 55,
    height: 55,
  },
  appTitleAndLogoContainer: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    width: '100%',
  },
  textInput: {
    width: '80%',
    height: RFValue(45),
    backgroundColor: '#ABE', //"#ABEDBE" //"#ABE"
    borderRadius: RFValue(5),
    borderWidth: RFValue(3.5),
    borderColor: 'darkgreen',
    fontFamily: 'cursive',
    marginTop: RFValue(15),
    fontSize: RFValue(28),
  },
  textStyle: {
    width: '80%',
    height: RFValue(45),
    backgroundColor: '#ABE',
    fontSize: RFValue(30),
    borderRadius: RFValue(5),
    marginTop: RFValue(15),
    fontFamily: "cursive",
  },
  backButton: {
    justifyContent: 'left',
    alignItems: 'left',
    alignSelf: 'center',
    width: '100%',
    height: RFValue(35),
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  backButtonText: {
    //marginLeft: 4,
    fontSize: RFValue(23),
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: RFValue(15),
    height: RFValue(35),
    borderRadius: RFValue(5),
    backgroundColor: 'green',
  },
  submitButtonText: {
    fontSize: RFValue(23),
    color: "white",
  },
  textView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modifyButton: {
    flexDirection: "row",
    borderRadius: RFValue(5),
    backgroundColor: "gray",
    width: "50%",
    height: "50%",
  },
});
