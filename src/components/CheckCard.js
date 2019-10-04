import React from "react";

class CheckCard extends React.Component {
  state = {
    paySystem: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.CardNunmber.length == "16") {
      let count = this.props.CardNunmber.substring(0, 4);
      if (this.props.CardNunmber !== prevProps.CardNunmber) {
        if (count < 2000) {
          this.setState({
            paySystem: "Visa"
          });
        } else {
          this.setState({
            paySystem: "MasterCard"
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

export default CheckCard;
