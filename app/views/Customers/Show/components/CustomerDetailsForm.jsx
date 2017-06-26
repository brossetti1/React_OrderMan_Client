/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This component is responsible for displaying a information about a Customer.
 *
 * @description Redux-form that performs validation and uses renderTextField for it's Fields.
 *
 * propTypes = {
 *   invalid: PropTypes.bool.isRequired,
 *   pristine: PropTypes.bool.isRequired,
 *   handleSubmit: PropTypes.func.isRequired,
 * };
 */

/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import {
  reduxForm,
  Field
} from 'redux-form';

import renderTextField from '../../../common/forms/renderTextField.jsx';

// Component imports
import SuccessButton from '../../../common/buttons/SuccessButton';


/**
 * @class CustomerDetailsForm represents
 * @description The form to authenticate Users (system admins)
 * Contains two inputs and a link
 *   input of type "email"
 *   input of type "password"
 *   Link from "react-router-dom" that routes to the "/" route for the SignupForm
 *
 */
class CustomerDetailsForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="spacer" />
            <h3>System Admin <b>Log in</b></h3>
            <div className="spacer" />
            <div className="col-md-10 col-md-offset-1">
              <Field
                name="first_name"
                component={renderTextField}
                placeholder="First Name"
              />
              <Field
                name="last_name"
                component={renderTextField}
                placeholder="Last Name"
              />
              <Field
                name="email"
                component={renderTextField}
                placeholder="Email"
                type="email"
              />
              <Field
                name="notes"
                component={renderTextField}
                placeholder="Notes"
              />
              <div className="spacer" />
              <SuccessButton
                block
                title="Create Customer"
              />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <h4>
            <Link to="/">
              {"I don't have an account yet"}
            </Link>
          </h4>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}


CustomerDetailsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


CustomerDetailsForm.defaultProps = {};


const validate = (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Email is required';
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'customerDetailsForm',
})(CustomerDetailsForm)