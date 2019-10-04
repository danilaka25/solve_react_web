import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';




class CardApp extends React.Component {
  state = {};
  updateData = (FirstName, LastName, CardNunmber, formValid, paySystem) => {
    this.setState({
      FirstName: FirstName,
      LastName: LastName,
      CardNunmber: CardNunmber,
      formValid: formValid,
      paySystem: paySystem
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    console.log('(render) CardApp')
    return (
      <div className="App container">
        {" "}
        <div className="row">
          {" "}
          <div className="col-md-8">
            {" "}
            <CardForm updateData={this.updateData} />{" "}
          </div>{" "}
          <div className="col-md-4">
            {" "}
            <DisplayCardInfo
              FirstName={this.state.FirstName}
              LastName={this.state.LastName}
              CardNunmber={this.state.CardNunmber}
              formValid={this.state.formValid}
              paySystem={this.state.paySystem}
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}


export default CardApp;
