import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  NativeModules,
} from 'react-native';
import {apiCallHandler} from '../../api/api';
import {AUDIO_URL} from '../../config/apiconfig';
import Styles from './Styles';

const Audio = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const dataHandler = data => {
    if (data && data.records && data.records.length > 0) {
      setAudios(data.records);
    }
    console.log('i AM THE DATA--->called');
  };

  const loadData = () => {
    apiCallHandler('GET', AUDIO_URL)
      .then(data => dataHandler(data))
      .catch(console.log('error'));
  };

  const handleAudio = url => {
    NativeModules.MusicPlayerModule.showToast(url);
  };

  return (
    <View>
      <FlatList
        data={audios}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleAudio(item.primaryurl)}
            style={Styles.videoCard}>
            <Icon
              size={30}
              color="#0d47a1"
              name="play-circle"
              style={Styles.icon}
            />
            <Text style={Styles.videoTitle} numberOfLines={2}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Audio;
