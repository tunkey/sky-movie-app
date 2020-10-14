import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from '../../components/search-result';
import SearchForm from '../../components/search-form';
import SearchSuggest from '../../components/search-suggest';
import LoadMoreData from '../../components/load-more-data';
import { INITIAL_MEDIA_TYPE } from '../../constants/common';
import { Container } from 'react-bootstrap';
import { getEntities } from '../../reducers/search-reducer';

export const HomePage = () => {
  const dispatch = useDispatch();

  const { entities, loading, totalItems } = useSelector(state => {
    return {
      entities: state.searchReducer.entities,
      loading: state.searchReducer.loading,
      totalItems: state.searchReducer.totalItems,
    };
  });

  const [queryCriteria, setQueryCriteria] = useState('');
  const [mediaType, setMediaType] = useState(INITIAL_MEDIA_TYPE);
  const [page, setPage] = useState(0);

  const fetchData = (criteria, conType, currPage) => {
    const { length } = criteria;
    if (length === 0) return;
    dispatch(getEntities(criteria, conType, currPage));
    setPage(currPage);
  };

  const handleSearchButtonClick = () => {
    fetchData(queryCriteria, mediaType, 1);
  };

  const handleLoadMoreButtonClick = () => {
    fetchData(queryCriteria, mediaType, page + 1);
  };

  const handleInputFieldKeyDown = event => {
    console.log('handleInputFieldKeyDown:', event.key);
    if (event.key === 'Enter') {
      fetchData(queryCriteria, mediaType, 1);
    }
  };

  const handleInputFieldChange = event => {
    const { value } = event.target;
    setQueryCriteria(value);
  };

  const handleChangeMediaType = event => {
    const { value } = event.target;
    setMediaType(value);
  };

  console.log('entities:', entities);

  return (
    <div>
      <Container className="movies">
        <SearchForm
          loading={loading}
          queryCriteria={queryCriteria}
          mediaType={mediaType}
          onHandleInputFieldChange={handleInputFieldChange}
          onHandleInputFieldKeyDown={handleInputFieldKeyDown}
          onHandleChangeMediaType={handleChangeMediaType}
          onHandleSearchButtonClick={handleSearchButtonClick}
        />
        <SearchSuggest queryCriteria={queryCriteria} />
        <SearchResult entities={entities} filterMediaType={mediaType} />
        <LoadMoreData
          loading={loading}
          totalItems={totalItems}
          handleLoadMoreButton={handleLoadMoreButtonClick}
        />
      </Container>
    </div>
  );
};

export default HomePage;
