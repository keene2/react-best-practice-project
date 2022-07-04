import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

function withRouter(component: () => React.ReactNode) {
  return function () {
    return (
      <BrowserRouter>
        <Suspense fallback="Loading...">{component()}</Suspense>
      </BrowserRouter>
    );
  };
}

export default withRouter;
