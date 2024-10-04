import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {SlidesData} from '../../models/heroSlideModel';
import {styles} from './styles';
import MediaPlayer from './MediaPlayer';
import ProgressBar from './ProgressBar';
import SlideContent from './SlideContent';

interface StorySliderProps {
  slides: SlidesData[];
}
const StorySlider = ({slides}: StorySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  if (currentSlide?.title === null) {
    setCurrentIndex(() => 0);
  }

  const goToNextSlide = useCallback(() => {
    setCurrentIndex(previousIndex => {
      if (previousIndex < slides.length - 1) {
        return previousIndex + 1;
      }
      return 0;
    });
  }, [slides.length]);

  return (
    <>
      {
        <View style={styles.container}>
          <MediaPlayer slide={currentSlide} action={goToNextSlide} />

          {currentSlide?.enableDarkBackdrop && <View style={styles.overlay} />}
          <SlideContent slide={currentSlide} action={goToNextSlide} />
          <ProgressBar slides={slides} />
        </View>
      }
    </>
  );
};

export default StorySlider;
