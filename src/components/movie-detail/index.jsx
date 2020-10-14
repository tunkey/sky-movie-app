import React from 'react';
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getImageSource } from '../../utils/image-util';
import { getFormattedDate } from '../../utils/date-util';
import { getVoteBadgeVariant } from '../../utils/badge-util';
import { getFloor } from '../../utils/number-util';
import { getOverview } from '../../utils/string-util';
import './styles.css';

const MovieDetail = ({ movie }) => {
  const {
    //id,
    genres,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
    vote_average,
    vote_count,
  } = movie;

  const releaseDateFormatted = getFormattedDate(release_date);

  const voteAverageFormatted = getFloor(vote_average);

  const voteVariant = getVoteBadgeVariant(voteAverageFormatted);

  const src = getImageSource(poster_path);

  const renderGenres = genresArr => genresArr.map(gen => gen.name).join();

  return (
    <Container>
      <Col sm={12} lg={12}>
        <Row>
          <Card>
            <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title>
                <Badge variant={voteVariant}>{vote_average}</Badge> {title}
              </Card.Title>
              <Card.Text>{getOverview(overview)}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`Status: ${status}`}</ListGroupItem>
              <ListGroupItem>{`Release Date: ${releaseDateFormatted}`}</ListGroupItem>
              <ListGroupItem>{`Genres: ${renderGenres(genres)}`}</ListGroupItem>
              <ListGroupItem>{`Popularity: ${popularity}`}</ListGroupItem>
              <ListGroupItem>{`Revenue: ${revenue}`}</ListGroupItem>
              <ListGroupItem>{`Runtime: ${runtime}`}</ListGroupItem>
              <ListGroupItem>{`Tagline: ${tagline}`}</ListGroupItem>
              <ListGroupItem>{`Vote Count: ${vote_count}`}</ListGroupItem>
              <ListGroupItem>{`Original Title: ${original_title}`}</ListGroupItem>
            </ListGroup>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  popularity: PropTypes.number,
  vote_count: PropTypes.number,
  video: PropTypes.bool,
  poster_path: PropTypes.string,
  id: PropTypes.number,
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  genre_ids: PropTypes.array,
  genres: PropTypes.array,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};
MovieDetail.defaultProps = {
  genres: [],
};
export default MovieDetail;
