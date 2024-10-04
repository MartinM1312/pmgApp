import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {SITE_URL} from '../../constants/urls';
import {styles} from './styles';
const Card = ({item}: any) => {
  return (
    <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
      <Text style={[styles.text, styles.intro]}>{item.intro}</Text>
      <Text style={styles.text}>{item.message}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(SITE_URL + item.ctaUrl)}>
        <Text style={[styles.text, styles.cta]}>{item.ctaLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
