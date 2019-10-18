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

// type Props = {
//   updateData: (
//     firstName: string,
//     lastName: string,
//     cardNunmber: string,
//     formValid: string,
//     paySystem: string,
//   ) => void,
// };

type Props = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  formValid: string,
  paySystem: string,
};

type State = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: string,
};

class CardApp extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  state = {};

  // updateData = (
  //   firstName: string,
  //   lastName: string,
  //   cardNunmber: string,
  //   formValid: string,
  //   paySystem: string,
  // ) => {
  //   //get
  //   this.setState({
  //     firstName: firstName,
  //     lastName: lastName,
  //     cardNunmber: cardNunmber,
  //     formValid: formValid,
  //     paySystem: paySystem,
  //   });
  // };

  // componentDidUpdate = (prevProps: Props) => {
  //   console.log(this.props)
  // }

  render() {
    // console.log('(render) CardApp');
    //console.log(this.props);
    return (
      <div className="App container">
        {' '}
        <div className="row">
          {' '}
          <div className="col-md-8">
            {' '}
            <CardForm />{' '}
          </div>{' '}
          <div className="col-md-4">
            {' '}
            <DisplayCardInfo />{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default CardApp;
