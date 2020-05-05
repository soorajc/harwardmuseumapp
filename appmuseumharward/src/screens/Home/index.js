/**
 * Harward Museum App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {apiCallHandler} from '../../api/api';
import {CLASSIFICATION_URL} from '../../config/apiconfig';
import Styles from './Styles';

const Home = props => {
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    apiCallHandler('GET', CLASSIFICATION_URL)
      .then(data => dataHandler(data))
      .catch(console.log('error'));
  };

  const dataHandler = data => {
    if (data && data.records && data.records.length > 0) {
      setClassifications(data.records);
    }
    console.log('i AM THE DATA--->called');
  };

  const showObjectCollection = data => {
    props.navigation.navigate('ObjectList', {data: data});
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Harward Art Museum</Text>
      </View>
      <View style={Styles.content}>
        <FlatList
          data={classifications}
          numColumns={2}
          renderItem={({item, index}) => (
            <View style={Styles.card}>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => showObjectCollection(item)}>
                <View style={Styles.nameContainer}>
                  <Text style={Styles.label}>{item.name}</Text>
                </View>
                <View style={Styles.countView}>
                  <Text style={Styles.countLabel}>{item.objectcount}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
