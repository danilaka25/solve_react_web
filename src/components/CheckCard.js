import React from "react";
import PropTypes from "prop-types";

class CheckCard extends React.Component {
  state = {
    paySystem: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cardNunmber.length === "16") {
      let count = this.props.cardNunmber.substring(0, 4);
      if (this.props.cardNunmber !== prevProps.cardNunmber) {
        if (count < 2000) {
          this.setState({
            paySystem: "Visa",
          });
        } else {
          this.setState({
            paySystem: "MasterCard",
          });
        }
      }
      this.props.updateData(this.state.paySystem);
    }
  }
  render() {
    console.log("(render) CheckCard");
    return <div> </div>;
  }
}

CheckCard.propTypes = {
  creditCardNumber: PropTypes.string,
  onCardChange: PropTypes.func,
};

CheckCard.defaultProps = {
  creditCardNumber: "0000 0000 0000 0000",
};

export default CheckCard;
