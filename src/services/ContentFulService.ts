import {DataApiRepository} from './repository';

export class ContentFulService {
  static async fetchAnnouncements() {
    const repository = new DataApiRepository();
    return await repository.fetchAnnouncements();
  }
  static async fetchHeroSlider() {
    const repository = new DataApiRepository();
    return await repository.fetchHeroSlider();
  }
}
