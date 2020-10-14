import React, { useState } from 'react';
import {
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
import { getFloor } from '../../utils/number-util';
import { getVoteBadgeVariant } from '../../utils/badge-util';
import { getOverview } from '../../utils/string-util';
import './styles.css';

const SearchResultMovie = ({ movie }) => {
  const {
    id,
    //poster_path,
    //adult,
    overview,
    release_date,
    original_title,
    //genre_ids,
    original_language,
    title,
    backdrop_path,
    popularity,
    vote_count,
    //video,
    vote_average,
  } = movie;

  const releaseDateFormatted = getFormattedDate(release_date);

  const [hasMoreInfo, setHasMoreInfo] = useState(false);

  const voteAverageFormatted = getFloor(vote_average);

  const voteVariant = getVoteBadgeVariant(voteAverageFormatted);

  const src = getImageSource(backdrop_path);

  const handleMoreInfoOnClick = event => {
    setHasMoreInfo(moreInfo => !moreInfo);
  };

  const renderMoreInfo = voteCount => (
    <ListGroup className="list-group-flush">
      <ListGroupItem>{`Vote Count: ${voteCount}`}</ListGroupItem>
    </ListGroup>
  );

  return (
    <Col sm={12} lg={6}>
      <Row>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title data-testid="card-title">
              <Badge variant={voteVariant}>{vote_average}</Badge> {title}
            </Card.Title>
            <Card.Text>{getOverview(overview)}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{`Popularity: ${popularity}`}</ListGroupItem>
            <ListGroupItem>{`Release Date: ${releaseDateFormatted}`}</ListGroupItem>
            <ListGroupItem>{`Original Title: ${original_title}`}</ListGroupItem>
            <ListGroupItem>{`Original Language: ${original_language}`}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link data-testid="card-detail-link" href={`/movie/${id}`}>
              Detail
            </Card.Link>
            <Card.Link href={'#'} onClick={handleMoreInfoOnClick}>
              More Info
            </Card.Link>
          </Card.Body>
          {hasMoreInfo === true ? renderMoreInfo(vote_count) : null}
        </Card>
      </Row>
    </Col>
  );
};

SearchResultMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SearchResultMovie;
