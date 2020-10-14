import axios from 'axios';
import { REST_API } from '../constants/api';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type-util';

export const ACTION_TYPES = {
  FETCH_PERSON_LIST: 'PERSON/FETCH_PERSON_LIST',
  FETCH_PERSON: 'PERSON/FETCH_PERSON',
  RESET: 'PERSON/RESET',
};

const DEFAULT_VALUE = {
  id: 0,
  name: '',
  birthday: '',
  known_for_department: '',
  deathday: '',
  also_known_as: [],
  gender: 0,
  biography: '',
  popularity: 0.0,
  place_of_birth: '',
  profile_path: '',
  adult: false,
  imdb_id: '',
  homepage: '',
};

const initialState = {
  loading: false,
  errorMessage: null,
  persons: [],
  person: DEFAULT_VALUE,
};

// Reducer
const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PERSON_LIST):
    case REQUEST(ACTION_TYPES.FETCH_PERSON):
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PERSON_LIST):
    case FAILURE(ACTION_TYPES.FETCH_PERSON):
    case SUCCESS(ACTION_TYPES.FETCH_PERSON_LIST): {
      return {
        ...state,
        loading: false,
        persons: action.payload.data.results,
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_MOVIE_PERSON_LIST): {
      return {
        ...state,
        loading: false,
        persons: action.payload.data.person,
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_PERSON):
      return {
        ...state,
        loading: false,
        person: action.payload.data,
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
export const getPersons = page => {
  const requestUrl = `${REST_API.PERSON_URL}`;
  return {
    type: ACTION_TYPES.FETCH_PERSON_LIST,
    payload: axios.get(requestUrl, { params: { page } }),
  };
};

export const getPerson = id => {
  const requestUrl = `${REST_API.PERSON_URL}/${id}`;

  return {
    type: ACTION_TYPES.FETCH_PERSON,
    payload: axios.get(requestUrl),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export default personReducer;
