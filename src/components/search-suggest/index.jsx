import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMovies } from '../../reducers/movie-reducer';
import { SUGGESTION_LIMIT } from '../../constants/common';
import './styles.css';

const SearchSuggest = ({ queryCriteria }) => {
  const dispatch = useDispatch();

  const { movies } = useSelector(state => {
    return {
      movies: state.movieReducer.movies,
    };
  });

  useEffect(() => {
    const { length } = queryCriteria;

    if (length >= SUGGESTION_LIMIT) {
      dispatch(getMovies(queryCriteria, 1));
    }
  }, [dispatch, queryCriteria]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <ListGroup className="searchSuggest">
      {movies.map(movie => {
        const { id, title } = movie;
        return (
          <ListGroupItem key={id}>
            <Link data-testid="input-search-suggestion" to={`/movie/${id}`}>
              {title}
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default SearchSuggest;
