import React, { useState } from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getImageSource } from '../../utils/image-util';
import './styles.css';

const SearchResultPerson = ({ person }) => {
  const {
    //adult,
    //gender,
    id,
    //known_for,
    known_for_department,
    name,
    popularity,
    profile_path,
  } = person;

  const [hasMoreInfo, setHasMoreInfo] = useState(false);

  const src = getImageSource(profile_path);

  const handleMoreInfoOnClick = event => {
    setHasMoreInfo(moreInfo => !moreInfo);
  };

  const renderMoreInfo = knownForDepartment => (
    <ListGroup className="list-group-flush">
      <ListGroupItem>{`Known For Department: ${knownForDepartment}`}</ListGroupItem>
    </ListGroup>
  );

  return (
    <Col sm={12} lg={6}>
      <Row>
        <Card>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title data-testid="card-title">{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{`Popularity: ${popularity}`}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link data-testid="card-detail-link" href={`/person/${id}`}>
              Detail
            </Card.Link>
            <Card.Link href={'#'} onClick={handleMoreInfoOnClick}>
              More Info
            </Card.Link>
          </Card.Body>
          {hasMoreInfo === true ? renderMoreInfo(known_for_department) : null}
        </Card>
      </Row>
    </Col>
  );
};

SearchResultPerson.propTypes = {
  person: PropTypes.object.isRequired,
};

export default SearchResultPerson;
