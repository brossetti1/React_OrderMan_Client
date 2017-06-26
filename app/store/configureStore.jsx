/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This file is meant to configure our Redux store.
 *
 * @description We'll configure the Redux store.
 *
 * @description We use applyMiddleware, compose, and createStore methods exported from 'redux'.
 *
 * @description We'll configure the store with middleware:
 *      routerMiddleware from 'react-router-redux'
 *      thunkMiddleware from 'redux-thunk'
 *
 * @description We'll also be using the Redux devToolsExtension.
 *
 * Make sure to install the extension from:
 * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
 *
 * @exports The created Redux store
 */

import thunkMiddleware from 'redux-thunk';
import createHashHistory from 'history/createHashHistory';

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

// export store combined with middleware through compose()
export default createStore(rootReducer, {}, compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(createHashHistory()),
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))