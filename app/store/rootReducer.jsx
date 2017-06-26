/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This file is meant to create the rootReducer for our Redux store.
 *
 * @description We'll use the 'combineReducers' function exported from the 'redux' package.
 *
 * @description We'll configure rootReducer with some default reducers:
 *      routerReducer from 'react-router-redux'
 *      formReducer from 'redux-form'
 *
 * @exports The rootReducer
 */

// import individual reduers
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; 
import { reducer as formReducer } from 'redux-form';

// reducers
import authReducer   from '../views/Unauthenticated/reducers/authReducer';
import loginReducer  from '../views/Unauthenticated/reducers/loginReducer';
import signupReducer from '../views/Unauthenticated/reducers/signupReducer';



// define main reducer
const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  signup: signupReducer,
  login: loginReducer,
  auth: authReducer
});

// export function returning main reducer
export default (state, action) => appReducer(state, action);