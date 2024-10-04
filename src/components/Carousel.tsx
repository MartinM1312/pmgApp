import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {SITE_URL} from '../constants/urls';
import {Announcement} from '../models/announcementsModel';

interface CarouselProps {
  announcements: Announcement[];
}
const {width: windowWidth} = Dimensions.get('window');

function Carousel({announcements}: CarouselProps): React.JSX.Element {
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
          return (
            <View
              style={[styles.card, {backgroundColor: item.backgroundColor}]}>
              <Text style={[styles.text, styles.intro]}>{item.intro}</Text>
              <Text style={styles.text}>{item.message}</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(SITE_URL + item.ctaUrl)}>
                <Text style={[styles.text, styles.cta]}>{item.ctaLabel}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={goToPreviousSlide}
        style={[styles.arrowButton, {left: 0}]}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToNextSlide}
        style={[styles.arrowButton, {right: 0}]}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default Carousel;
