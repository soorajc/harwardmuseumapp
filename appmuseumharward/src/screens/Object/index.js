/**
 * Harward Museum App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Share,
  ActivityIndicator,
  Image,
  NativeModules,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {apiCallHandler} from '../../api/api';
import {OBJECT_DETAILS_URL} from '../../config/apiconfig';
import Styles from './Styles';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const ObjectList = props => {
  const [objectDetails, setObjectDetails] = useState([]);
  const objectData = props.route.params.data;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const objectId = objectData.id;
    apiCallHandler('GET', OBJECT_DETAILS_URL + objectId)
      .then(data => dataHandler(data))
      .catch(console.log('error'));
  };

  const dataHandler = data => {
    if (data && data.records && data.records.length > 0) {
      setObjectDetails(data.records);
    }
  };

  const shareLink = url => {
    Share.share({
      message: 'Check out this \n' + url,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };

  const handleDownLoad = (url, name) => {
    if (url) {
      NativeModules.MusicPlayerModule.downloadImage(url, name);
    }
  };

  const requestDownloadPermission = async (url, name) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Need Permission to download the file',
          message: 'App needs permission to save the picture to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleDownLoad(url, name);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={Styles.slide}>
        <View style={Styles.imageContainer}>
          <Image
            source={{
              uri: item.primaryimageurl
                ? item.primaryimageurl
                : 'https://wiki.tripwireinteractive.com/images/4/47/Placeholder.png',
            }}
            style={Styles.itemImage}
          />
        </View>
        <View style={Styles.footerContainer}>
          <Text numberOfLines={2} style={Styles.slideTitle}>
            {item.title}
          </Text>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.eyeButton}>
            <Icon name="eye" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              requestDownloadPermission(
                item.primaryimageurl,
                item.title.substring(0, 10),
              )
            }
            style={Styles.eyeButton}>
            <Icon name="download" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shareLink(item.url)}
            style={Styles.shareButton}>
            <Icon name="share-alt" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (objectDetails.length > 0) {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={Styles.iconContainer}>
            <Icon name="chevron-left" size={20} color="#353B48" />
          </TouchableOpacity>
          <View style={Styles.paddingView} />
        </View>
        <View style={Styles.content}>
          <Text style={Styles.title}>{objectData.name}</Text>
          <Carousel
            data={objectDetails}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width * 0.8}
            layout="tinder"
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={Styles.loaderView}>
        <ActivityIndicator size="large" color="#353B48" />
      </View>
    );
  }
};

export default ObjectList;
