import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import {
  LOAD_ARTICLES,
  LOAD_ARTICLE,
  EDIT_ARTICLE,
  AUTH,
  LOGIN,
  EDIT,
  AUTH_CHECK,
  CREATE,
  EDIT_ART,
  CHECK,
  MODAL,
} from './actionCase.js';

const defaultState = {
  articles: {},
  page: 1,
  article: {},
  slug: 'safd-m50xen',
  offset: 0,
  authLast: {},
  authNow: {},
  check: false,
  auth: false,
  edit: false,
  modal: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, articles: action.payload, page: action.getPage, offset: action.getOffset };
    case LOAD_ARTICLE:
      return { ...state, article: action.payload2, slug: action.getSlug };
    case AUTH:
      return { ...state, authLast: action.payload, check: action.check };
    case LOGIN:
      return { ...state, authNow: action.payload, auth: action.auth };
    case EDIT:
      return { ...state, authNow: action.payload, create: action.create };
    case AUTH_CHECK:
      return { ...state, auth: action.payload };
    case CREATE:
      return { ...state, check: action.payload };
    case EDIT_ART:
      return { ...state, edit: action.payload };
    case CHECK:
      return { ...state, check: action.payload };
    case EDIT_ARTICLE:
      return { ...state, check: action.payload };
    case MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
