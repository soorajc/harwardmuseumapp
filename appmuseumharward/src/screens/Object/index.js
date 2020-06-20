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
  Share,
  ActivityIndicator,
  NativeModules,
  PermissionsAndroid,
  Linking,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Image from 'react-native-image-progress';
import {apiCallHandler} from '../../api/api';
import {OBJECT_DETAILS_URL, PDF_API_KEY} from '../../config/apiconfig';
import Styles from './Styles';
import Swiper from 'react-native-swiper';

const ObjectList = props => {
  const [objectDetails, setObjectDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const objectData = props.route.params.data;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const objectId = objectData.id;
    const url = OBJECT_DETAILS_URL + objectId;
    loadData(url, 'initial');
  }, []);

  const loadData = (url, type) => {
    apiCallHandler('GET', url)
      .then(data => dataHandler(data, type))
      .catch(console.log('error'));
  };

  const dataHandler = (data, type) => {
    setLoading(false);
    if (data && data.records && data.records.length > 0) {
      if (type === 'initial') {
        setObjectDetails(data.records);
        setTotalCount(data.info.pages);
      } else {
        const currentData = [...objectDetails, ...data.records];
        setObjectDetails(currentData);
        setLoading(false);
      }
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
        console.log('saving permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const showDetails = item => {
    props.navigation.navigate('ObjectDetails', {data: item});
  };

  const handlePagination = () => {
    const objectId = objectData.id;
    const currentPage = page + 1;
    setPage(currentPage);
    const url = OBJECT_DETAILS_URL + objectId + '&page=' + currentPage;
    if (page <= totalCount) {
      setLoading(true);
      loadData(url, '');
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={Styles.slide} key={item.id.toString()}>
        <View style={Styles.imageContainer}>
          <Image
            source={{
              uri: item.primaryimageurl
                ? item.primaryimageurl
                : 'https://www.harvardartmuseums.org/assets/images/no_image_thumb.png',
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
          <TouchableOpacity
            onPress={() => showDetails(item)}
            style={Styles.eyeButton}>
            <Icon name="eye" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              requestDownloadPermission(
                item.primaryimageurl,
                item.title.substring(0, 10),
              )
            }
            style={Styles.eyeButton}>
            <Icon name="download" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shareLink(item.url)}
            style={Styles.shareButton}>
            <Icon name="share-alt" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const updateData = () => {
    handlePagination();
  };

  const listFooter = () => {
    if (loading) {
      return (
        <View style={Styles.listFooter}>
          <ActivityIndicator color="#353B48" size="large" />
        </View>
      );
    } else {
      return <View />;
    }
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
          <Text style={Styles.subTitle}>Swipe to explore the collections</Text>
          <FlatList
            data={objectDetails}
            showsHorizontalScrollIndicator={false}
            renderItem={(item, index) => _renderItem(item, index)}
            keyExtractor={item => item.id.toString()}
            extraData={objectDetails}
            horizontal
            pagingEnabled={true}
            style={Styles.list}
            onEndReached={updateData}
            ListFooterComponent={listFooter}
            showsVerticalScrollIndicator={false}
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
