import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, FlatList, TouchableOpacity, Linking} from 'react-native';
import {apiCallHandler} from '../../api/api';
import {VIDEO_URL} from '../../config/apiconfig';
import Styles from './Styles';

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const dataHandler = data => {
    if (data && data.records && data.records.length > 0) {
      setVideos(data.records);
    }
    console.log('i AM THE DATA--->called');
  };

  const loadData = () => {
    apiCallHandler('GET', VIDEO_URL)
      .then(data => dataHandler(data))
      .catch(console.log('error'));
  };

  const handleVideo = url => {
    try {
      Linking.openURL(url);
    } catch (error) {
      console.log('Error in opening url');
    }
  };

  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleVideo(item.primaryurl)}
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

export default Video;
