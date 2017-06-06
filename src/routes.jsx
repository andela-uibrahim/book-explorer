import React from 'react';
import { Route } from 'react-router';
import Global from './components/global.jsx';

export default(
  <Route>
    <Route path="/" component={Global} />
  </Route>
);