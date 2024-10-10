import React, {useState, useRef, useEffect} from 'react';
import {Image, Animated, View} from 'react-native';
import {styles} from './styles';
import Video from 'react-native-video';
const MediaPlayer = ({slides, currentSlide, slideIndex, action}: any) => {
  const isVideo =
    currentSlide?.mobileImageOrVideo?.contentType.startsWith('video');

  const progressBars = useRef<Animated.Value[]>([]).current;

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (slides.length > 0 && progressBars.length === 0) {
      progressBars.push(...slides.map(() => new Animated.Value(0)));
    }
  }, [slides, progressBars]);

  const onProgress = (data: {currentTime: number}) => {
    const progressValue = data.currentTime / duration;
    if (progressBars[slideIndex]) {
      Animated.timing(progressBars[slideIndex], {
        toValue: progressValue,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  const onLoad = (data: {duration: number}) => {
    setDuration(data.duration);
  };

  const imgTimeout = () => {
    setTimeout(() => action(), 5000);
  };
  return (
    <>
      {isVideo ? (
        <>
          <Video
            source={{uri: currentSlide?.mobileImageOrVideo?.url}}
            style={styles.media}
            resizeMode="cover"
            onProgress={onProgress}
            onLoad={onLoad}
            onEnd={action}
          />
          <View style={styles.progressContainer}>
            {slides.map((_: any, index: any) => (
              <View key={index} style={styles.progressBarBackground}>
                {progressBars[index] && index === slideIndex ? (
                  <Animated.View
                    style={[
                      styles.progressBar,
                      {
                        width: progressBars[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0%', '100%'],
                        }),
                      },
                    ]}
                  />
                ) : (
                  <></>
                )}
              </View>
            ))}
          </View>
        </>
      ) : (
        <Image
          source={{uri: currentSlide?.mobileImageOrVideo?.url}}
          style={styles.media}
          onLoad={imgTimeout}
        />
      )}
    </>
  );
};

export default MediaPlayer;
