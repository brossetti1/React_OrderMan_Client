/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Creates Customers. You need to use an AuthenticatedLayout and CustomerDetailsForm.
 *
 * propTypes = {
 *   performCustomersCreateAction: PropTypes.func.isRequired,
 *   customersCreateForm: ...
 * };
 *
 * @exports CustomersCreateContainer
 */


// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux'


import CustomerDetailsForm from '../Show/components/CustomerDetailsForm.jsx';

import { performCreateCustomer } from './actions/customersCreateActions.jsx';


class CustomersCreateContainer extends Component {
  constructor(props) {
    super(props);
  
    this.handleSubmit = (e) => {
      e.preventDefault();
      const { values } = this.props.customerCreateForm;
      this.props.performCreateCustomer(values)
    }
  }

  render() {
    return (
      <div>
        <h1>This is the Customers Create Container!</h1>
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
        <CustomerDetailsForm handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customersCreate: state.customersCreate,
  customerCreateForm: state.form.customerDetailsForm,
})

const mapDispatchToProps = () => ({
  performCreateCustomer,
})

export default connect(mapStateToProps, mapDispatchToProps())(CustomersCreateContainer)