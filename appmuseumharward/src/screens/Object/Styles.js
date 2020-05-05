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
  title: {
    color: '#353B48',
    fontSize: height * 0.03,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.04,
    width: '90%',
    alignSelf: 'center',
  },
  content: {
    flex: 0.9,
  },
  slide: {
    height: height * 0.7,
  },
  slideTitle: {
    color: 'white',
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    fontSize: height * 0.02,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#f44336',
  },
  itemImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'stretch',
  },
  footerContainer: {
    backgroundColor: '#f44336',
    height: '15%',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    height: '15%',
    //backgroundColor: '#f05f3e',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: height * 0.05,
  },
  shareButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.97,
    elevation: 11,
  },
  eyeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.97,
    elevation: 11,
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
