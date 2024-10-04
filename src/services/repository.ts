import {heroSlidesAdapter} from './adapters';
import {announcementClient, heroSliderClient} from './apollo/graphqlClient';
import {GET_ANNOUNCEMENTS, GET_HERO_SLIDER} from './apollo/queries';

export class DataApiRepository {
  async fetchAnnouncements() {
    const {data} = await announcementClient.query({query: GET_ANNOUNCEMENTS});
    return data.announcementCollection.items;
  }
  async fetchHeroSlider() {
    const {data} = await heroSliderClient.query({query: GET_HERO_SLIDER});
    return heroSlidesAdapter({dataInput: data});
  }
}
