/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { history } from '../../../Routes';
import { post } from '../../../../utilities/apiUtilities.jsx';

export const REQUEST_CUSTOMERS_CREATE_ACTION  = 'REQUEST_CUSTOMERS_CREATE_ACTION'
export const RECEIVE_CUSTOMERS_CREATE_SUCCESS = 'RECEIVE_CUSTOMERS_CREATE_SUCCESS'
export const RECEIVE_CUSTOMERS_CREATE_FAILURE = 'RECEIVE_CUSTOMERS_CREATE_FAILURE'


const requestCustomersCreateAction = () => ({
  type: REQUEST_CUSTOMERS_CREATE_ACTION,
});

const receiveCustomersCreateSuccess = () => ({
  type: RECEIVE_CUSTOMERS_CREATE_SUCCESS,
});

const receiveCustomersCreateFailure = () => ({
  type: RECEIVE_CUSTOMERS_CREATE_FAILURE,
  payload: {
    error,
  }
});


export const performCreateCustomer = (customerData) => {
  return (dispatch) => {
    dispatch(requestCustomersCreateAction());
    console.log("sending create customer request")
    post('/customers', customerData)
      .then(() => {
        dispatch(receiveCustomersCreateSuccess());
        // insert alert or notice
        console.log("created a customer and redirecting")
        history.push("/customers");
      })
      .catch((error) => {
        console.log("errored")
        dispatch(receiveCustomersCreateFailure(error))
      })
  }
}