import {StyleSheet, Dimensions} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: windowWidth,
    padding: 20,
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContent: {
    height: '100%',
    width: windowWidth,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  eyebrowContainer: {
    position: 'absolute',
    top: 20,
    marginLeft: 30,
  },
  eyebrowImage: {
    width: 50,
    height: 50,
  },
  eyebrowText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ctaText: {
    fontSize: 18,
    color: '#eff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  progressBarBackground: {
    flex: 1,
    height: 5,
    backgroundColor: '#aaa',
    marginHorizontal: 2,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#e0e0e0',
  },
  navigateSliderButton: {
    position: 'absolute',
    right: 30,
    bottom: 40,
  },
  navigateSliderIcon: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#aaaa',
  },
});
