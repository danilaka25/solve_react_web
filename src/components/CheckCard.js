/* eslint-disable */
// @flow
import React from 'react';


type Props = {
  cardNunmber: string,
  // onCardChange: (v1: string) => void,
};

type State = {
  paySystem: string,
};

class CheckCard extends React.Component<Props, State> {
 
  state = {
      paySystem: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.cardNunmber.length === '16') {
      const count = this.props.cardNunmber.substring(0, 4);
      if (this.props.cardNunmber !== prevProps.cardNunmber) {
        if (count < 2000) {
          this.setState({
            paySystem: 'Visa',
          });
        } else {
          this.setState({
            paySystem: 'MasterCard',
          });
        }
      }
      this.props.updateData(this.state.paySystem);
    }
  }

  render() {
    // console.log("(render) CheckCard");
    return <div></div>;
  }
}



export default CheckCard;
