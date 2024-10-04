import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import {SlidesData} from '../models/heroSlideModel';

const {width: windowWidth} = Dimensions.get('window');
const StorySlider = ({slides}: {slides: SlidesData[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const progress = useRef(new Animated.Value(0)).current;
  const currentSlide = slides[0];

  const nextSlide = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(0); // Volver al primer slide al final
    }
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const duration = 10000;

    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start(() => {
      nextSlide();
    });
    return () => {
      progress.setValue(0);
    };
  }, [nextSlide, progress]);

  return (
    <View style={styles.container}>
      {/* Media (Video o Imagen) */}
      {currentSlide?.mobileImageOrVideo?.contentType.startsWith('video') ? (
        <Video
          source={{uri: currentSlide?.mobileImageOrVideo?.url}}
          style={styles.media}
          resizeMode="cover"
          onEnd={nextSlide}
        />
      ) : (
        <Image
          source={{uri: currentSlide?.mobileImageOrVideo?.url}}
          style={styles.media}
        />
      )}

      {/* Fondo oscuro opcional */}
      {currentSlide?.enableDarkBackdrop && <View style={styles.overlay} />}

      {/* Contenido superpuesto */}
      <View style={styles.overlayContent}>
        {currentSlide?.eyebrowImage && (
          <Image
            source={currentSlide.eyebrowImage}
            style={styles.eyebrowImage}
          />
        )}
        {currentSlide?.eyeBrowText && (
          <Text style={styles.eyebrowText}>{currentSlide?.eyeBrowText}</Text>
        )}
        {currentSlide?.title && (
          <Text style={styles.title}>{currentSlide?.title}</Text>
        )}
        {currentSlide?.targetUrl && (
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.ctaText}>Learn More</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        {slides.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.progressBar,
              index <= currentIndex && {backgroundColor: '#fff'},
              index === currentIndex && {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        ))}
      </View>

      {/* Botón para avanzar manualmente */}
      {/* <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
        <Text style={styles.nextButtonText}>{'>'}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: windowWidth,
    padding: 20,
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContent: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    right: '5%',
  },
  eyebrowImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  eyebrowText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ctaText: {
    fontSize: 16,
    color: '#00f',
    marginTop: 10,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#aaa',
    marginHorizontal: 2,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StorySlider;
