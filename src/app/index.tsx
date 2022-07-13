import React from 'react';
import { withProviders } from './providers';
import './index.scss';
import Routing from 'pages';

function App() {
  return <Routing />;
}

export default withProviders(App);
