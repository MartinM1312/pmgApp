import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
const ProgressBar = ({slides}: any) => {
  const renderProgressBars = () => {
    return slides.map((_: any, index: any) => (
      <View key={index} style={styles.progressBarBackground}>
        <View style={styles.progressBar} />
      </View>
    ));
  };
  return <View style={styles.progressContainer}>{renderProgressBars()}</View>;
};

export default ProgressBar;
