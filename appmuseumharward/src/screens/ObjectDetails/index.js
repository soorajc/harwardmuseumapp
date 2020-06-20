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
          <View style={Styles.row}>
            <Text style={Styles.labelTitle}>Culture</Text>
            <Text style={Styles.labelValue}>
              {details.culture ? details.culture : 'Not Available'}
            </Text>
          </View>
          <View style={Styles.row}>
            <Text style={Styles.labelTitle}>Century</Text>
            <Text style={Styles.labelValue}>
              {details.century ? details.century : 'Not Available'}
            </Text>
          </View>
          <View style={Styles.row}>
            <Text style={Styles.labelTitle}>Technique</Text>
            <Text style={Styles.labelValue}>
              {details.technique ? details.technique : 'Not Available'}
            </Text>
          </View>
          <View style={Styles.row}>
            <Text style={Styles.labelTitle}>Medium</Text>
            <Text style={Styles.labelValue}>
              {details.medium ? details.medium : 'Not Available'}
            </Text>
          </View>
          <View style={Styles.row}>
            <Text style={Styles.labelTitle}>Accession Year</Text>
            <Text style={Styles.labelValue}>
              {details.accessionyear ? details.accessionyear : 'Not Available'}
            </Text>
          </View>
          {details.description && (
            <View style={Styles.row}>
              <Text style={Styles.labelTitle}>Description</Text>
              <Text style={Styles.description}>{details.description}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => handlePdfDownLoad(details.url)}
            style={Styles.downloadButton}>
            <Text style={Styles.downloadLabel}>
              Download full details as PDF
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ObjectDetails;
