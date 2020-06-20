import React from 'react';
import {Text, View, Linking, TouchableOpacity} from 'react-native';
import Styles from './Styles';

const InfoScreen = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Text style={Styles.labelTitle}>Version</Text>
        <Text style={Styles.labelValue}>1.0</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.labelTitle}>Credits</Text>
        <Text style={Styles.labelValue}>The Harvard Art Museums API</Text>
        <Text style={Styles.labelValue}>
          The app is built using the open API of Harvard Art Museums.
        </Text>
        <Text style={Styles.labelValue}>
          All data and images are the property of The Harvard Art Museums
        </Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.labelTitle}>Powered By</Text>
        <Text style={Styles.labelValue}>React Native 0.61.0</Text>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('mailto:soorajcmpm@gmail.com')}
        style={Styles.row}>
        <Text style={Styles.labelTitle}>Contact</Text>
        <Text style={Styles.labelValue}>
          If you have any feedbacks or need any help in React Native app
          development feel free to contact{' '}
        </Text>
        <Text style={Styles.email}>Tap here to drop an email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoScreen;
