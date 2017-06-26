/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducer "login".
 *
 * @description Responsible for maintaining information about the login call.
 *
 * initialState = {
 *   isFetching: false,
 *   error: null,
 * };
 *
 */

import {
  REQUEST_LOGIN_ACTION,
  RECEIVE_LOGIN_SUCCESS,
  RECEIVE_LOGIN_FAILURE,
} from '../actions/loginActions';

const initialState = {
  isFetching: false,
  error: null
}

export default (reduxState = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case REQUEST_LOGIN_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null
      };
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...reduxState,
        isFetching: false
      };
    case RECEIVE_LOGIN_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error
      };
    default:
      return reduxState;

  }
}