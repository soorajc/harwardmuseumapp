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
    marginBottom: height * 0.01,
    width: '90%',
    alignSelf: 'center',
  },
  subTitle: {
    color: '#353B48',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    fontSize: height * 0.02,
    marginBottom: height * 0.03,
  },
  content: {
    flex: 0.9,
  },
  slide: {
    height: height * 0.7,
    width: width,
    alignSelf: 'center',
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
    alignSelf: 'center',
    width: '90%',
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
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '90%',
    height: '15%',
    //backgroundColor: '#f05f3e',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: height * 0.01,
  },
  shareButton: {
    height: 40,
    width: '30%',
    borderRadius: 2,
    backgroundColor: '#bdbdbd',
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
    width: '30%',
    borderRadius: 2,
    marginRight: '5%',
    backgroundColor: '#bdbdbd',
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
  buttonWrapperStyle: {
    position: 'absolute',
    marginTop: -height * 0.08,
  },
  arrow: {
    fontSize: height * 0.12,
    fontFamily: 'Montserrat-Regular',
  },
  list: {
    width: width,
  },
  listFooter: {
    height: height * 0.7,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
