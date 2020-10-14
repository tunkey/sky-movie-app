import React from 'react';
import { Container, Row, Table, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

const Casts = ({ movieId, casts }) => {
  return (
    <Container className="casts">
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Real Name</th>
              <th>Character</th>
            </tr>
          </thead>
          <tbody>
            {casts.map((cast, index) => {
              const personUrl = `/movie/${movieId}/person/${cast.id}`;
              return (
                <tr key={`person-${index}`}>
                  <td>
                    <Nav.Link data-testid="cast-list-index" href={personUrl}>
                      {index + 1}
                    </Nav.Link>
                  </td>
                  <td>
                    <Nav.Link data-testid="cast-list-name" href={personUrl}>
                      {cast.name}
                    </Nav.Link>
                  </td>
                  <td>
                    <Nav.Link
                      data-testid="cast-list-character"
                      href={personUrl}
                    >
                      {cast.character}
                    </Nav.Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

Casts.propTypes = {
  casts: PropTypes.array,
};

export default Casts;
