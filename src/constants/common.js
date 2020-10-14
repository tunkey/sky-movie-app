export const IMAGE_CONST = {
  HOST: 'https://image.tmdb.org/t/p/',
  DEFAULT: 'w185',
  NO_POSTER: 'https://dummyimage.com/185x278/eeeeee/999999&text=No+poster',
};

export const OVERVIEW_LENGTH = 100;

export const MEDIA_TYPES = {
  ALL: {
    VALUE: 'all',
    LABEL: 'All Content',
    SEARCH_URL: `/search/multi`,
  },
  MOVIE: {
    VALUE: 'movie',
    LABEL: 'Only Movies',
    SEARCH_URL: `/search/movie`,
  },
  TV: {
    VALUE: 'tv',
    LABEL: 'Only TV Shows',
    SEARCH_URL: `/search/tv`,
  },
  PERSON: {
    VALUE: 'person',
    LABEL: 'Only Actors',
    SEARCH_URL: `/search/person`,
  },
};

export const INITIAL_MEDIA_TYPE = 'all';

export const SUGGESTION_LIMIT = 5;
