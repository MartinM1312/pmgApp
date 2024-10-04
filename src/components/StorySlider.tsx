import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import {SlidesData} from '../models/heroSlideModel';
import SvgUri from 'react-native-svg-uri';
import {SITE_URL} from '../constants/urls';

const {width: windowWidth} = Dimensions.get('window');
const StorySlider = ({slides}: {slides: SlidesData[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const goToNextSlide = useCallback(() => {
    setCurrentIndex(previousIndex => {
      if (previousIndex < slides.length - 1) {
        return previousIndex + 1;
      }
      return 0;
    });
  }, [slides.length]);

  const renderProgressBars = () => {
    return slides.map((_, index) => (
      <View key={index} style={styles.progressBarBackground}>
        <View style={styles.progressBar} />
      </View>
    ));
  };

  const isVideo =
    currentSlide?.mobileImageOrVideo?.contentType.startsWith('video');

  if (currentSlide?.title === null) {
    setCurrentIndex(() => 0);
  }
  return (
    <>
      {
        <View style={styles.container}>
          {isVideo ? (
            <Video
              source={{uri: currentSlide?.mobileImageOrVideo?.url}}
              style={styles.media}
              resizeMode="cover"
              onEnd={goToNextSlide}
            />
          ) : (
            <Image
              source={{uri: currentSlide?.mobileImageOrVideo?.url}}
              style={styles.media}
            />
          )}

          {currentSlide?.enableDarkBackdrop && <View style={styles.overlay} />}

          <View style={styles.overlayContent}>
            {currentSlide?.eyebrowImage && (
              <View style={styles.eyebrowContainer}>
                <SvgUri source={{uri: currentSlide?.eyebrowImage}} />
              </View>
            )}
            {currentSlide?.eyeBrowText && (
              <Text style={styles.eyebrowText}>
                {currentSlide?.eyeBrowText}
              </Text>
            )}
            {currentSlide?.title && (
              <Text style={styles.title}>{currentSlide?.title}</Text>
            )}
            {currentSlide?.targetUrl && (
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(SITE_URL + currentSlide?.targetUrl)
                }>
                <Text style={styles.ctaText}>Learn More</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.navigateSliderButton}
              onPress={goToNextSlide}>
              <Text style={styles.navigateSliderIcon}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressContainer}>{renderProgressBars()}</View>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
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
    right: 15,
  },
  navigateSliderIcon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#aaaa',
  },
});

export default StorySlider;
