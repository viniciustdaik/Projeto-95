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
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

import { RFValue } from 'react-native-responsive-fontsize';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "notDefined",
      contact: "notDefined",
    };
  }

  componentDidMount() {
    this.setState({
      //city: this.props.navigation.route.params.city,
      //contact: this.props.navigation.route.params.contact,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitleAndLogoContainer}>
            <Image
              style={styles.appIcon}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.appTitleText}>Trocando</Text>
          </View>

          <View
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
              Feed
            </Text>
          </View>
        </View>

        <AnimateBtn
          style={styles.createTradeButton}
          useNativeDriver
          animation="bounceInUp"
          duration={1500}
          onPress={() => this.props.navigation.navigate("CreateTrade", {
            city: this.state.city,
            contact: this.state.contact,
          })}>
          <Ionicons name="ios-add" size={35} color="#B0E0E6" />
        </AnimateBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABDEEF',
  },
  container2: {
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
  createTradeButton: {
    position: "absolute",
    backgroundColor: 'blue',
    borderRadius: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    right: 25,
    bottom: 25,
    shadowOpacity: 0.2,
    zIndex: 9,
    shadowColor: "yellow",
  },
});
