import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchResultMovie from '../search-result-movie';
import SearchResultTv from '../search-result-tv';
import SearchResultPerson from '../search-result-person';
import PropTypes from 'prop-types';
import './styles.css';

const SearchResult = ({ filterMediaType, entities }) => {
  const renderSearchResultItem = (fMediaType, entity) => {
    let mediaTypeItem;
    if (fMediaType === 'all') {
      mediaTypeItem = entity.media_type;
    } else {
      mediaTypeItem = filterMediaType;
    }

    let result;
    switch (mediaTypeItem) {
      case 'movie':
        result = <SearchResultMovie key={entity.id} movie={entity} />;
        break;
      case 'tv':
        result = <SearchResultTv key={entity.id} tv={entity} />;
        break;
      case 'person':
        result = <SearchResultPerson key={entity.id} person={entity} />;
        break;
      default:
        break;
    }

    return result;
  };
  return (
    <Container className="movies">
      <Row>
        {entities.map(entity =>
          renderSearchResultItem(filterMediaType, entity),
        )}
      </Row>
    </Container>
  );
};

SearchResult.propTypes = {
  entities: PropTypes.array.isRequired,
};

export default SearchResult;
