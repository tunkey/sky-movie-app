import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteTemplate from '../layout/SiteTemplate';
import SiteHeader from '../layout/SiteHeader';
import SiteFooter from '../layout/SiteFooter';
import AppRoutes from './routes';
import './styles.css';

const App = () => {
  return (
    <Router>
      <SiteTemplate>
        <SiteHeader />
        <main>
          <AppRoutes />
        </main>
        <SiteFooter />
      </SiteTemplate>
    </Router>
  );
};

export default App;
