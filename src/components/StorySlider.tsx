import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SlidesData} from '../models/heroSlideModel';

const StorySlider = ({slides}: {slides: SlidesData[]}) => {
  return (
    <View style={styles.container}>
      <Text>Story Viewer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default StorySlider;
