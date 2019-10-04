import React from "react";
import PropTypes from "prop-types";


class DisplayCardInfo extends React.Component {
  state = {
    visible: false,
    timerId: undefined,
    startAt: undefined
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      //console.log('clear')
      this.setState({
        visible: false,
        timerId: false,
        startAt: undefined
      });
    }, 5000);
    this.setState({
      visible: true,
      timerId,
      startAt: Date.now()
    });
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.cardNunmber === this.props.cardNunmber
    ) {
      return;
    }
    if (!this.state.visible) {
      return this.startTimer();
    }
    // Timer is already rendered. Reset prev timer + start new timer for 5 sec
    //console.log("update timer");
    const timerId = this.state.timerId;
    clearTimeout(timerId);
    this.startTimer();
  };

  render() {
    console.log("(render) DisplayCardInfo");

    if (!this.state.visible) {
      return null;
    }

    let toShow = this.props.formValid === "true" ? true : false;

    return (
      <div>
        {" "}
        {toShow ? (
          <div>
            {" "}
            <h2> Result </h2> <div className="panel panel-default"> </div>{" "}
            <p> First Name: {this.props.firstName} </p>{" "}
            <p> Last Name: {this.props.lastName} </p>{" "}
            <p>
              {" "}
              Card Nunmber: **** **** ****{" "}
              {this.props.cardNunmber.substr(
                this.props.cardNunmber.length - 4
              )}{" "}
            </p>{" "}
            <p> Pay System: {this.props.paySystem} </p>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <h2> Result </h2> <div className="panel panel-default"> </div>{" "}
            <h3> Error </h3>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}


DisplayCardInfo.propTypes = {
  visible: PropTypes.bool
}

DisplayCardInfo.defaultProps = {
  isFormInfoVisibile: false
}

export default DisplayCardInfo;
