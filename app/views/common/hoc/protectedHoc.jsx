/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The protectedHoc Higher-Order-Component takes a component.
 *
 * @description Based on auth state, it navigates accordingly.
 *
 * @description It allows authenticated users to access the authenticated part of the site.
 *
 * @description This ses another HOC 'withRouter' from to attach routing props to the component.
 *
 * PropTypes = {
 *   location: ...
 * };
 *
 * DefaultProps = {};
 *
 * @exports protectedHoc Higher-Order-Component
 */

// Module imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Custom imports
import {
  isAuthenticated,
} from '../../../utilities/authUtilities';

/**
 * @description HOC to detect authentication status and route accordingly
 * Requires a user to be authenticated in order to access the component
 */
export default (BaseComponent) => {
  class ProtectedHoc extends Component {
    componentWillMount() {
      isAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isAuthenticated();
      }
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }


  // ProtectedHoc.propTypes = {
  //   location: PropTypes.string.isRequired,
  // };

  return withRouter(ProtectedHoc);
};