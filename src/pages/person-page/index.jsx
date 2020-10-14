import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Person from '../../components/person';
import { getPerson } from '../../reducers/person-reducer';
import './styles.css';

export const PersonPage = () => {
  const { movieId, personId } = useParams();
  const dispatch = useDispatch();

  const { person } = useSelector(state => {
    return {
      person: state.personReducer.person,
    };
  });

  useEffect(() => {
    dispatch(getPerson(personId));
  }, [dispatch, personId]);

  return (
    <div className="detail">
      <Person movieId={movieId} person={person} />
    </div>
  );
};

export default PersonPage;
