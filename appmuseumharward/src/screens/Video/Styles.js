import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoCard: {
    backgroundColor: 'white',
    height: height * 0.2,
    margin: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    borderRadius: 5,
  },
  icon: {
    alignSelf: 'center',
    marginTop: '8%',
  },
  videoTitle: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: '8%',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
