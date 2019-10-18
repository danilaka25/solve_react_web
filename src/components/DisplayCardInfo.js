/* eslint-disable */
// @flow

import React from 'react';
import { connect } from 'react-redux';

// import { store } from '../configs/createStore';

type Props = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: string,
  formData: any,
};

type State = {
  visible: boolean,
  timerId?: TimeoutID,
  startAt?: number,
};

class DisplayCardInfo extends React.Component<Props, State> {
  // static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  state = {
    visible: false,
    timerId: undefined,
    startAt: undefined,
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      // console.log('clear')
      this.setState({
        visible: false,
        timerId: undefined,
        startAt: undefined,
      });
    }, 3000);
    this.setState({
      visible: true,
      timerId,
      startAt: Date.now(),
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    if (
      prevProps.formData.firstName === this.props.formData.firstName &&
      prevProps.formData.lastName === this.props.formData.lastName &&
      prevProps.formData.cardNunmber === this.props.formData.cardNunmber
    ) {
      return;
    }
    if (!this.state.visible) {
      return this.startTimer();
    }
    // Timer is already rendered. Reset prev timer + start new timer for 5 sec
    // console.log("update timer");
    const { timerId } = this.state;
    clearTimeout(timerId);
    this.startTimer();
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    const isVisible = this.props.formData.formValid === 'true';

    console.log(this.props.formData);

    return (
      <div>
        {isVisible ? (
          <div>
            <h2> Result </h2>
            <div className="panel panel-default"> </div>
            <p>
              First Name:
              {this.props.formData.firstName}
              Last Name:
              {this.props.formData.lastName}
            </p>
            <p>
              Card Nunmber: **** **** ****
              {this.props.formData.cardNunmber.substr(
                this.props.formData.cardNunmber.length - 4,
              )}
            </p>
            <p> Pay System: {this.props.formData.paySystem} </p>
          </div>
        ) : (
          <div>
            <h2> Result </h2> <div className="panel panel-default"> </div>
            <h3> Error </h3>
          </div>
        )}
      </div>
    );
  }
}

const DisplayCardInfoContainer = connect(state => ({
  formData: state.formReducer,
}))(DisplayCardInfo);

export default DisplayCardInfoContainer;
