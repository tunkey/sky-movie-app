import axios from 'axios';
import { REST_API } from '../constants/api';
import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type-util';

export const ACTION_TYPES = {
  FETCH_MOVIE_LIST: 'MOVIE/FETCH_MOVIE_LIST',
  FETCH_MOVIE_CAST_LIST: 'MOVIE/FETCH_MOVIE_CAST_LIST',
  FETCH_MOVIE: 'MOVIE/FETCH_MOVIE',
  RESET: 'MOVIE/RESET',
};

const DEFAULT_VALUE = {
  id: 0,
  title: '',
  popularity: 0.0,
  video: false,
  vote_count: 0,
  vote_average: 0.0,
  release_date: '0000-00-00',
  original_language: '',
  original_title: '',
  genres: [],
  genre_ids: [],
  backdrop_path: '',
  adult: false,
  overview: '',
  poster_path: '',
};

const initialState = {
  loading: false,
  errorMessage: null,
  movies: [],
  movie: DEFAULT_VALUE,
  casts: [],
  totalItems: 0,
};

// Reducer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MOVIE_LIST): {
      return {
        ...state,
        loading: true,
      };
    }
    case REQUEST(ACTION_TYPES.FETCH_MOVIE_CAST_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MOVIE):
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_MOVIE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MOVIE_CAST_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MOVIE):
    case SUCCESS(ACTION_TYPES.FETCH_MOVIE_LIST): {
      console.log('action.payload:', action.payload);
      return {
        ...state,
        loading: false,
        movies: action.payload.data.results,
        totalItems: parseInt(action.payload.data.results.length),
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_MOVIE_CAST_LIST): {
      return {
        ...state,
        loading: false,
        casts: action.payload.data.cast,
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_MOVIE):
      return {
        ...state,
        loading: false,
        movie: action.payload.data,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Actions
export const getMovies = (query, page) => {
  const requestUrl = `${REST_API.SEARCH_MOVIE_URL}`;
  return {
    type: ACTION_TYPES.FETCH_MOVIE_LIST,
    payload: axios.get(requestUrl, { params: { page, query } }),
  };
};

export const getMovie = id => {
  const requestUrl = `${REST_API.MOVIE_URL}/${id}`;

  return {
    type: ACTION_TYPES.FETCH_MOVIE,
    payload: axios.get(requestUrl),
  };
};

export const getMovieCasts = movieId => {
  const requestUrl = `${REST_API.MOVIE_URL}/${movieId}/credits`;
  return {
    type: ACTION_TYPES.FETCH_MOVIE_CAST_LIST,
    payload: axios.get(requestUrl),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export default movieReducer;
