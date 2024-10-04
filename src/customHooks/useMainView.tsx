/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState, useEffect} from 'react';

import {SlidesData} from '../models/heroSlideModel';

import {ContentFulService} from '../services/ContentFulService';

export function useMainView() {
  const [announcements, setAnnouncements] = useState([]);
  const [heroSlides, setHeroSlides] = useState<SlidesData[]>([]);
  const getAnnouncements = async () => {
    try {
      const data = await ContentFulService.fetchAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHeroSlides = async () => {
    try {
      const data = await ContentFulService.fetchHeroSlider();
      setHeroSlides(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnnouncements();
    getHeroSlides();
  }, []);

  return {heroSlides, announcements};
}
