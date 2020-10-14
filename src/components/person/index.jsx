import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getImageSource } from '../../utils/image-util';
import './styles.css';

const Person = ({ movieId, person }) => {
  const {
    //id,
    name,
    birthday,
    //known_for_department,
    //deathday,
    also_known_as,
    //gender,
    biography,
    popularity,
    place_of_birth,
    profile_path,
    //adult,
    //imdb_id,
    //homepage,
  } = person;

  const src = getImageSource(profile_path);
  return (
    <Col sm={12} lg={6}>
      <Row>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{biography}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{`Birthday: ${birthday}`}</ListGroupItem>
            <ListGroupItem>{`Also Known As: ${also_known_as}`}</ListGroupItem>
            <ListGroupItem>{`Popularity: ${popularity}`}</ListGroupItem>
            <ListGroupItem>{`Place Of Birth: ${place_of_birth}`}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link data-testid="goto-movie-link" href={`/movie/${movieId}`}>
              Go to Movie
            </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
};

Person.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  birthday: PropTypes.string,
  known_for_department: PropTypes.string,
  deathday: PropTypes.string,
  also_known_as: PropTypes.array,
  gender: PropTypes.number,
  biography: PropTypes.string,
  popularity: PropTypes.number,
  place_of_birth: PropTypes.string,
  profile_path: PropTypes.string,
  adult: PropTypes.bool,
  imdb_id: PropTypes.string,
  homepage: PropTypes.string,
};

export default Person;
