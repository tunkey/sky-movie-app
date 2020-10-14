import React, { useEffect, createRef } from 'react';
import { Form, Button, FormControl, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MEDIA_TYPES } from '../../constants/common';
import './styles.css';

const searchInputRef = createRef();

const SearchForm = ({
  loading,
  queryCriteria,
  mediaType,
  onHandleInputFieldChange,
  onHandleInputFieldKeyDown,
  onHandleChangeMediaType,
  onHandleSearchButtonClick,
}) => {
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const renderMediaTypeOptions = mediaTypes => {
    return (
      <>
        {[
          mediaTypes.ALL,
          mediaTypes.MOVIE,
          mediaTypes.TV,
          mediaTypes.PERSON,
        ].map((item, index) => (
          <option key={item.VALUE} value={item.VALUE}>
            {item.LABEL}
          </option>
        ))}
      </>
    );
  };

  return (
    <Form controlid="formSearch" data-test-id="form-search">
      <Form.Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <FormControl
            type="text"
            ref={searchInputRef}
            value={queryCriteria}
            onChange={onHandleInputFieldChange}
            onKeyDown={onHandleInputFieldKeyDown}
            data-testid="input-search"
            placeholder="Please enter keyword"
          />
        </Col>

        <Col xs="auto" className="my-1">
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            data-testid="select-media-type"
            onChange={onHandleChangeMediaType}
            value={mediaType}
            custom
          >
            {renderMediaTypeOptions(MEDIA_TYPES)}
          </Form.Control>
        </Col>
        <Col xs="auto" className="my-1">
          <Button
            variant="primary"
            data-testid="button-search"
            disabled={loading}
            onClick={onHandleSearchButtonClick}
          >
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

SearchForm.propTypes = {
  queryCriteria: PropTypes.string,
};

export default SearchForm;
