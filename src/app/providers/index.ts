import compose from 'compose-function';
import withRouter from './with-router';
import withRedux from './width-redux';

export const withProviders = compose(withRouter, withRedux);
