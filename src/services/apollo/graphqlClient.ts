import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

import {ANNOUNCEMENTS_API_KEY, HERO_SLIDER_API_KEY} from '@env';
const announcementClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/951t4k2za2uf/environments/development',
    headers: {
      authorization: `Bearer ${ANNOUNCEMENTS_API_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});

const heroSliderClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/tyqyfq36jzv2/environments/development',
    headers: {
      authorization: `Bearer ${HERO_SLIDER_API_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});

export {announcementClient, heroSliderClient};
