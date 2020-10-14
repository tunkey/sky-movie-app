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
import { getFloor } from '../../utils/number-util';
import { getVoteBadgeVariant } from '../../utils/badge-util';
import { getOverview } from '../../utils/string-util';
import { getFormattedDate } from '../../utils/date-util';
import './styles.css';

const SearchResultTv = ({ tv }) => {
  const {
    //backdrop_path,
    first_air_date,
    //genre_ids,
    id,
    name,
    origin_country,
    original_language,
    original_name,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  } = tv;

  const firstAirDate = getFormattedDate(first_air_date);

  const [hasMoreInfo, setHasMoreInfo] = useState(false);

  const voteAverageFormatted = getFloor(vote_average);

  const voteVariant = getVoteBadgeVariant(voteAverageFormatted);

  const src = getImageSource(poster_path);

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
              <Badge variant={voteVariant}>{vote_average}</Badge>
              {name}
            </Card.Title>
            <Card.Text>{getOverview(overview)}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{`Popularity: ${popularity}`}</ListGroupItem>
            <ListGroupItem>{`First Air Date: ${firstAirDate}`}</ListGroupItem>
            <ListGroupItem>{`Origin Country: ${origin_country}`}</ListGroupItem>
            <ListGroupItem>{`Original Language: ${original_language}`}</ListGroupItem>
            <ListGroupItem>{`Original Name: ${original_name}`}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link data-testid="card-detail-link" href={`/tv/${id}`}>
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

SearchResultTv.propTypes = {
  tv: PropTypes.object.isRequired,
};

export default SearchResultTv;
