import {StyleSheet, Dimensions} from 'react-native';

export const {width: windowWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {},
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
  },
  card: {
    paddingHorizontal: 35,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontWeight: 'bold',
  },
  cta: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  arrowButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  arrowText: {
    fontSize: 24,
    color: '#fff',
  },
});
