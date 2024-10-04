/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const NavigationArrow = ({action, direction}: any) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={[styles.arrowButton, {[direction]: 0}]}>
      <Text style={styles.arrowText}>{direction === 'left' ? '<' : '>'}</Text>
    </TouchableOpacity>
  );
};

export default NavigationArrow;
