import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';
import Video from 'react-native-video';
const MediaPlayer = ({slide, action}: any) => {
  const isVideo = slide?.mobileImageOrVideo?.contentType.startsWith('video');

  const imgTimeout = () => {
    setTimeout(() => action(), 5000);
  };

  return (
    <>
      {isVideo ? (
        <Video
          source={{uri: slide?.mobileImageOrVideo?.url}}
          style={styles.media}
          resizeMode="cover"
          onEnd={() => action()}
        />
      ) : (
        <Image
          source={{uri: slide?.mobileImageOrVideo?.url}}
          style={styles.media}
          onLoad={imgTimeout}
        />
      )}
    </>
  );
};

export default MediaPlayer;
