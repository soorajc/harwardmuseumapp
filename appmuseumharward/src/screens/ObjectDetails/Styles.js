import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flex: 0.1,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.97,
    elevation: 11,
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingView: {
    width: '80%',
  },
  content: {
    flex: 0.9,
  },
  imageContainer: {
    width: '100%',
    height: 0.5 * height,
    backgroundColor: 'red',
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'stretch',
  },
  title: {
    marginTop: '5%',
    marginBottom: '5%',
    fontFamily: 'Montserrat-Black',
    fontSize: height * 0.03,
    color: '#20232A',
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
  },
  description: {
    marginTop: '5%',
    marginBottom: '5%',
    fontFamily: 'Montserrat-Regular',
    fontSize: height * 0.02,
    color: '#20232A',
    width: '90%',
    textAlign: 'justify',
  },
  downloadButton: {
    width: '80%',
    alignSelf: 'center',
    height: 0.05 * height,
    backgroundColor: '#353B48',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05,
    marginTop: 0.05 * height,
  },
  downloadLabel: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
  },
  row: {
    width: width,
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderBottomWidth: 1,
    borderColor: '#ededed',
  },
  labelTitle: {
    fontFamily: 'Montserrat-Black',
    color: '#558b2f',
  },
  labelValue: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    marginTop: '2%',
  },
});

export default styles;
