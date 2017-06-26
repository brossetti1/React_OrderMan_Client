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

import renderTextField from '../../common/forms/renderTextField';

// Component imports
import SuccessButton from '../../common/buttons/SuccessButton';


/**
 * @class LoginForm represents
 * @description The form to authenticate Users (system admins)
 * Contains two inputs and a link
 *   input of type "email"
 *   input of type "password"
 *   Link from "react-router-dom" that routes to the "/" route for the SignupForm
 *
 */
class LoginForm extends Component {
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
                name="email"
                component={renderTextField}
                placeholder="Email"
                type="email"
              />
              <Field
                name="password"
                component={renderTextField}
                placeholder="Password"
                type="password"
              />
              <div className="spacer" />
              <SuccessButton
                block
                title="Log in"
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


LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


LoginForm.defaultProps = {};


const validate = (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Email is required';
  }

  if(!values.password) {
    errors.password = 'Password is required';
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'loginForm',
})(LoginForm)