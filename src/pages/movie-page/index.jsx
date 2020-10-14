import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetail from '../../components/movie-detail';
import Casts from '../../components/casts';
import { Container, Row, Col } from 'react-bootstrap';
import { getMovie, getMovieCasts } from '../../reducers/movie-reducer';
import './styles.css';

export const MoviePage = ({ match }) => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const { movie, casts } = useSelector(state => {
    return {
      movie: state.movieReducer.movie,
      casts: state.movieReducer.casts,
    };
  });

  useEffect(() => {
    dispatch(getMovie(movieId));
    dispatch(getMovieCasts(movieId));
  }, [dispatch, movieId]);

  return (
    <div className="detail">
      <Container>
        <Row>
          <Col>
            <MovieDetail movie={movie} />
          </Col>
          <Col>
            <Casts movieId={movieId} casts={casts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviePage;
