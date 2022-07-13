import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

function withRedux(component: () => React.ReactNode) {
  return function () {
    return <Provider store={store}>{component()}</Provider>;
  };
}

export default withRedux;
