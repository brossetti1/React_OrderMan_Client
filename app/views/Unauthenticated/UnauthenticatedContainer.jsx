/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Component imports
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';

import {
  performSignup,
} from './actions/signupActions';

import {
  performLogin,
} from './actions/loginActions';

/**
 * @class UnauthenticatedContainer
 * @description Routing container for unauthenticated components
 * like Login and Signup.
 * @description Here, we're rendering an UnauthenticatedLayout which shows a Logo on
 * top, and then renders "children" passed into it. In this case, the "children" are
 * two Routes:
 *   "/login" renders the LoginForm
 *   "/" renders the SignupForm
 *
 */

class UnauthenticatedContainer extends Component {
  constructor(props) {
    super(props);


    /**
     * onSubmit handler for the LoginForm
     * @param event
     */
    this.signup = (event) => {
      event.preventDefault();
      const values = this.props.signupForm.values;
      this.props.performSignup(values);
    };


    /**
     * onSubmit handler for the SignupForm
     * @param event
     */
    this.login = (event) => {
      event.preventDefault();
      const values = this.props.loginForm.values;
      this.props.performLogin(values);
    };
  }

  render() {

    const {
      login,
      signup,
    } = this.props;

    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route
            path="/login"
            render={props =>
              (<LoginForm
                {...props}
                handleSubmit={this.login}
              />)
            }
          />
          <Route
            exact
            path="/"
            render={props =>
              (<SignupForm
                {...props}
                handleSubmit={this.signup}
              />)
            }
          />
        </Switch>
      </UnauthenticatedLayout>
    );
  }
}


UnauthenticatedContainer.propTypes = {};

const mapStateToProps = state => ({
  signup: state.signup,
  login: state.login,
  signupForm: state.form.signupForm,
  loginForm: state.form.loginForm
});


const mapDispatchToProps = () => ({
  performSignup,
  performLogin
});

export default connect(mapStateToProps, mapDispatchToProps())(UnauthenticatedContainer);