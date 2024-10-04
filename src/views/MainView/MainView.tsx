import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Carousel from '../../components/Carousel/Carousel';
import StorySlider from '../../components/StorySlider/StorySlider';

import {useMainView} from '../../customHooks/useMainView';
import {styles} from './styles';

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
