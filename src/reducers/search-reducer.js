import axios from 'axios';
import { loadMoreData } from '../utils/data-table-util';
import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type-util';
import { MEDIA_TYPES } from '../constants/common';

export const ACTION_TYPES = {
  FETCH_SEARCH_LIST: 'SEARCH/FETCH_SEARCH_LIST',
  RESET: 'SEARCH/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [],
  totalItems: 0,
};

// Reducer
const searchReducer = (state = initialState, action) => {
  console.log('searchReducer action.type:', action.type);
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SEARCH_LIST):
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SEARCH_LIST):
    case SUCCESS(ACTION_TYPES.FETCH_SEARCH_LIST): {
      return {
        ...state,
        loading: false,
        entities: loadMoreData(
          state.entities,
          action.payload.data.results,
          action.payload.data.page,
        ),
        totalItems: parseInt(action.payload.data.total_results),
      };
    }
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Actions
export const getEntities = (query, contentType, page) => {
  const requestUrl = MEDIA_TYPES[contentType.toUpperCase()].SEARCH_URL;
  return {
    type: ACTION_TYPES.FETCH_SEARCH_LIST,
    payload: axios.get(requestUrl, { params: { page, query } }),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export default searchReducer;
