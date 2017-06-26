/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { history } from '../../Routes';
import { posts } from '../../../utilities/apiUtilities';

export const REQUEST_SIGNUP_ACTION = 'REQUEST_SIGNUP_ACTION';
export const RECEIVE_SIGNUP_SUCCESS = 'RECEIVE_SIGNUP_SUCCESS';
export const RECEIVE_SIGNUP_FAILURE = 'RECEIVE_SIGNUP_FAILURE';


const requestSignupAction = () => ({
  type: REQUEST_SIGNUP_ACTION,
})

const receiveSignupSuccess = () => ({
  type: RECEIVE_SIGNUP_SUCCESS,
})

const receiveSignupFailure = error => ({
  type: RECEIVE_SIGNUP_FAILURE,
  payload: {
    error,
  }
})

export const performSignup = credentials => {
  return (dispatch) => {
    dispatch(requestSignupAction());
    post('users/register', credentials)
      .then((response => {
        dispatch(receiveSignupSuccess);
        alert('Signup successful! Now go to login!');
        history.push('/login');
      })
      .catch((error) =>{
        dispatch(receiveSignupFailure(error))
      })
    )
  }
}