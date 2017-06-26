/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The notProtectedHoc Higher-Order-Component takes a component.
 *
 * @description Based on auth state, it navigates accordingly.
 *
 * @description It allows unauthenticated users to access the unauthenticated part of the site.
 *
 * @description This ses another HOC 'withRouter' from to attach routing props to the component.
 *
 * PropTypes = {
 *   location: ...
 * };
 *
 * DefaultProps = {};
 *
 * @exports notProtectedHoc Higher-Order-Component
 */

// Module imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Custom imports
import {
  isNotAuthenticated,
} from '../../../utilities/authUtilities';

/**
 * @description HOC to detect authentication status and route accordingly
 * Requires a user to be unauthenticated in order to access the component
 */
export default (BaseComponent) => {
  class notProtectedHoc extends Component {
    componentWillMount() {
      isNotAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isNotAuthenticated();
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }


  // notProtectedHoc.propTypes = {
  //   location: PropTypes.string.isRequired,
  // };

  return withRouter(notProtectedHoc);
};