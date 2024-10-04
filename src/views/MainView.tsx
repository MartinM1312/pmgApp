import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Carousel from '../components/Carousel/Carousel';
import StorySlider from '../components/StorySlider/StorySlider';

import {useMainView} from '../customHooks/useMainView';

export function MainView(): React.JSX.Element {
  const {announcements, heroSlides} = useMainView();
  return (
    <SafeAreaView>
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
