import React, {useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Styles from './Styles';
import {StackActions} from '@react-navigation/native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => launchHomeScreen(), 2000);
  }, []);

  const launchHomeScreen = () => {
    props.navigation.dispatch(StackActions.replace('Home'));
  };
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../assets/splash.jpg')}
        style={Styles.image}>
        <View style={Styles.titleView}>
          <Text style={Styles.title}>Welcome to A4Art Museum</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
