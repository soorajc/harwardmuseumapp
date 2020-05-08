import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Styles from './Styles';
import Image from 'react-native-image-progress';
import {PDF_API_KEY} from '../../config/apiconfig';

const ObjectDetails = props => {
  const details = props.route.params.data;

  const handlePdfDownLoad = url => {
    const downloadUrl =
      'https://api.html2pdf.app/v1/generate?url=' +
      url +
      '&apiKey=' +
      PDF_API_KEY;
    Linking.openURL(downloadUrl);
  };

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
        <ScrollView>
          <View style={Styles.imageContainer}>
            <Image
              source={{
                uri: details.primaryimageurl
                  ? details.primaryimageurl
                  : 'https://www.harvardartmuseums.org/assets/images/no_image_thumb.png',
              }}
              style={Styles.image}
            />
          </View>
          <Text style={Styles.title}>{details.title}</Text>
          <Text style={Styles.description}>{details.description}</Text>
          <TouchableOpacity
            onPress={() => handlePdfDownLoad(details.url)}
            style={Styles.downloadButton}>
            <Text style={Styles.downloadLabel}>
              Download full details as Pdf
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ObjectDetails;
