import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: width,
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },
  labelTitle: {
    fontFamily: 'Montserrat-Black',
    color: '#558b2f',
  },
  labelValue: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    marginTop: '2%',
    width: '80%',
    textAlign: 'justify',
  },
  description: {
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    fontSize: height * 0.028,
    width: '80%',
  },
  email: {
    marginTop: '2%',
    fontFamily: 'Montserrat-Black',
    color: '#3f51b5',
  },
});

export default styles;
