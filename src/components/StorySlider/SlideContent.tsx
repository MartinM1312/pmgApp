import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {styles} from './styles';
import SvgUri from 'react-native-svg-uri';
import {SITE_URL} from '../../constants/urls';

const SlideContent = ({slide, action}: any) => {
  return (
    <View style={styles.overlayContent}>
      {slide?.eyebrowImage && (
        <View style={styles.eyebrowContainer}>
          <SvgUri source={{uri: slide?.eyebrowImage}} />
        </View>
      )}
      {slide?.eyeBrowText && (
        <Text style={styles.eyebrowText}>{slide?.eyeBrowText}</Text>
      )}
      {slide?.title && <Text style={styles.title}>{slide?.title}</Text>}
      {slide?.targetUrl && (
        <TouchableOpacity
          onPress={() => Linking.openURL(SITE_URL + slide?.targetUrl)}>
          <Text style={styles.ctaText}>Learn More</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.navigateSliderButton}
        onPress={() => action()}>
        <Text style={styles.navigateSliderIcon}>{'Next >'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlideContent;
