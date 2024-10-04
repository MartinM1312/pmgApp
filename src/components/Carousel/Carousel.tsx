import React, {useRef} from 'react';
import {View, FlatList} from 'react-native';
import {Announcement} from '../../models/announcementsModel';
import {styles} from './styles';
import Card from './Card';
import NavigationArrow from './NavigationArrow';

interface CarouselProps {
  announcements: Announcement[];
}

function Carousel({announcements}: CarouselProps) {
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  const goToNextSlide = () => {
    if (currentIndex.current < announcements.length - 1) {
      currentIndex.current += 1;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }
  };
  const goToPreviousSlide = () => {
    if (currentIndex.current > 0) {
      currentIndex.current -= 1;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={announcements}
        style={styles.container}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
      />
      <NavigationArrow action={goToPreviousSlide} direction="left" />
      <NavigationArrow action={goToNextSlide} direction="right" />
    </View>
  );
}
export default Carousel;
