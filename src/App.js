/* eslint-disable */
// @flow

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';

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
  formValid: boolean,
 
};

class CardApp extends React.Component<Props, State> {
  state = {};

  updateData = (firstName: string, lastName: string, cardNunmber: string, formValid: boolean, paySystem: string) => { //get
    this.setState({
      firstName: firstName,
      lastName: lastName,
      cardNunmber: cardNunmber,
      formValid: formValid,
      paySystem: paySystem,
    });
  };

  // componentDidMount() {
  //   console.log(this.state);
  // }

  render() {
    // console.log("(render) CardApp");
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
