/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducer "auth".
 *
 * @description This reducer is solely responsible for maintaining auth information.
 *
 * initialState = {
 *   access_token: localStorage.getItem('access_token') || null
 * };
 *
 */

import RECEIVE_LOGIN_SUCCESS from '../actions/loginActions';

const initialState = {
  access_token: localStorage.getItem('access_token') || null
};

export default (reduxState = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...reduxState
      };
    default: 
      return reduxState;
  }
}