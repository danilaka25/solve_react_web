/* eslint-disable */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';
if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => void,
};

type State = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: string,
};

class CardApp extends React.Component<Props, State> {
  static whyDidYouRender = true;

  state = {};

  updateData = (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => {
    //get
    this.setState({
      firstName: firstName,
      lastName: lastName,
      cardNunmber: cardNunmber,
      formValid: formValid,
      paySystem: paySystem,
    });
  };

  render() {
    // console.log('(render) CardApp');
    console.log(this.state);
    return (
      <div className="App container">
        {' '}
        <div className="row">
          {' '}
          <div className="col-md-8">
            {' '}
            <CardForm updateData={this.updateData} />{' '}
          </div>{' '}
          <div className="col-md-4">
            {' '}
            <DisplayCardInfo
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              cardNunmber={this.state.cardNunmber}
              formValid={this.state.formValid}
              paySystem={this.state.paySystem}
            />{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default CardApp;
