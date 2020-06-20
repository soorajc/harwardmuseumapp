import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-Black',
    fontSize: height * 0.04,
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',
  },
});

export default styles;
