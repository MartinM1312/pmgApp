import React from 'react';
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
  return (
    <FlatList
      data={announcements}
      style={styles.container}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  card: {
    padding: 15,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cta: {
    color: 'white',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Carousel;
