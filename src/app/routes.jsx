import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import MoviePage from '../pages/movie-page';
import PersonPage from '../pages/person-page';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/movie/:movieId">
        <MoviePage />
      </Route>
      <Route exact path="/movie/:movieId/person/:personId">
        <PersonPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
