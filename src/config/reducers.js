import { combineReducers } from 'redux';
import movieReducer from '../reducers/movie-reducer';
import personReducer from '../reducers/person-reducer';
import searchReducer from '../reducers/search-reducer';

const rootReducer = combineReducers({
  movieReducer,
  personReducer,
  searchReducer,
});

export default rootReducer;
