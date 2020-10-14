import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

const LoadMoreData = ({ loading, totalItems, handleLoadMoreButton }) => {
  return (
    <>
      {totalItems > 0 ? (
        <Button
          className="load-more"
          variant="outline-info"
          block
          onClick={handleLoadMoreButton}
        >
          {loading ? 'Loading…' : 'Load More'}
        </Button>
      ) : null}
    </>
  );
};
export default LoadMoreData;
