import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED3269',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 10,
  },
  title: {
    color: '#353B48',
    fontSize: height * 0.035,
    fontFamily: 'Montserrat-Black',
  },
  content: {
    flex: 0.9,
    backgroundColor: 'white',
  },
  footer: {
    flex: 0.1,
    backgroundColor: '#F7F8FA',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F7F8FA',
    height: height * 0.2,
    margin: '5%',
    borderRadius: 5,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  nameContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: height * 0.02,
    color: '#20232a',
    textAlign: 'center',
    width: '80%',
  },
  countView: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#69f0ae',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  countLabel: {
    fontFamily: 'Montserrat-Black',
    fontSize: height * 0.014,
    color: 'white',
  },
  loaderContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
