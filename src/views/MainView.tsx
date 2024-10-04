/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import Carousel from '../components/Carousel';
import StorySlider from '../components/StorySlider';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {useMainView} from '../customHooks/useMainView';

export function MainView(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {announcements, heroSlides} = useMainView();

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Carousel announcements={announcements} />
        <StorySlider slides={heroSlides} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Bold',
  },
});
