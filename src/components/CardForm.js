import React from "react";
import CheckCard from "./CheckCard";

import PropTypes from "prop-types";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardNunmber: "",
      CardNunmberValid: false,
      CardExpirationDate: "",
      CardExpirationDateValid: false,
      cvv: "",
      cvvValid: false,
      FirstName: "",
      FirstNameValid: false,
      LastName: "",
      LastNameValid: false,
      SecretQuestion: "",
      SecretQuestionValid: false,
      SecretAnswer: "",
      SecretAnswerValid: false,
      formErrors: {
        CardNunmber: "",
        CardExpirationDate: "",
        cvv: "",
        FirstName: "",
        LastName: "",
        SecretQuestion: "",
        SecretAnswer: "",
      },
      formValid: false,
      paySystem: "--",
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let CardNunmberValid = this.state.CardNunmberValid;
    let CardExpirationDateValid = this.state.CardExpirationDateValid;
    let cvvValid = this.state.cvvValid;
    let FirstNameValid = this.state.FirstNameValid;
    let LastNameValid = this.state.LastNameValid;
    let SecretQuestionValid = this.state.SecretQuestionValid;
    let SecretAnswerValid = this.state.SecretAnswerValid;
    switch (fieldName) {
      case "CardNunmber":
        fieldName = value.match(/^[0-9]{16}$/);
        if (fieldName) {
          CardNunmberValid = true;
          fieldValidationErrors.CardNunmber = "";
        } else {
          CardNunmberValid = false;
          fieldValidationErrors.CardNunmber = " is invalid";
        }
        break;
      case "CardExpirationDate":
        fieldName = value.match(
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/
        );
        if (fieldName) {
          CardExpirationDateValid = true;
          fieldValidationErrors.CardExpirationDate = "";
        } else {
          CardExpirationDateValid = false;
          fieldValidationErrors.CardExpirationDate = " is invalid";
        }
        break;
      case "cvv":
        fieldName = value.match(/^[0-9]{3,4}$/);
        if (fieldName) {
          cvvValid = true;
          fieldValidationErrors.cvv = "";
        } else {
          cvvValid = false;
          fieldValidationErrors.cvv = " is invalid";
        }
        break;
      case "FirstName":
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          FirstNameValid = true;
          fieldValidationErrors.FirstName = "";
        } else {
          FirstNameValid = false;
          fieldValidationErrors.FirstName = " is invalid";
        }
        break;
      case "LastName":
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          LastNameValid = true;
          fieldValidationErrors.LastName = "";
        } else {
          LastNameValid = false;
          fieldValidationErrors.LastName = " is invalid";
        }
        break;
      case "SecretQuestion":
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          SecretQuestionValid = true;
          fieldValidationErrors.SecretQuestion = "";
        } else {
          SecretQuestionValid = false;
          fieldValidationErrors.SecretQuestion = " is invalid";
        }
        break;
      case "SecretAnswer":
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          SecretAnswerValid = true;
          fieldValidationErrors.SecretAnswer = "";
        } else {
          SecretAnswerValid = false;
          fieldValidationErrors.SecretAnswer = " is invalid";
        }
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      CardNunmberValid: CardNunmberValid,
      CardExpirationDateValid: CardExpirationDateValid,
      cvvValid: cvvValid,
      FirstNameValid: FirstNameValid,
      LastNameValid: LastNameValid,
      SecretQuestionValid: SecretQuestionValid,
      SecretAnswerValid: SecretAnswerValid,
    });
  }

  // zzz Не понял что тут происходит. Перегруженная конструкция, я бы подумал над упрощением

  updateData = paySystem => {
    if (this.state.paySystem !== paySystem) {
      this.setState({
        paySystem: paySystem,
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      // this.state.CardNunmberValid &&
      // this.state.CardExpirationDateValid &&
      // this.state.cvvValid &&
      this.state.FirstNameValid &&
      this.state.LastNameValid
      // this.state.SecretQuestionValid &&
      // this.state.SecretAnswerValid

      // zzz  6) Думаю эта функция работает, но выглядит неправильно с точки зрения чистого кода
    ) {
      this.setState({
        formValid: "true",
      });
    } else {
      this.setState({
        formValid: "false",
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      return;
    }

    this.props.updateData(
      this.state.FirstName,
      this.state.LastName,
      this.state.CardNunmber,
      this.state.formValid,
      this.state.paySystem // post
    );
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    console.log("(render) CardForm");
    return (
      <div>
        {" "}
        <form className="demoForm">
          {" "}
          <h2> Form </h2>{" "}
          <div className="panel panel-default">
            {" "}
            {/*<FormErrors formErrors={this.state.formErrors} />*/}{" "}
          </div>{" "}
          <div className="card_row">
            {" "}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.CardNunmber
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="CardNunmber"
                placeholder="Card Nunmber"
                value={this.state.CardNunmber}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.CardExpirationDate
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="CardExpirationDate"
                placeholder="mm/yyyy"
                value={this.state.CardExpirationDate}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.cvv
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="cvv"
                placeholder="cvv"
                value={this.state.cvv}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            {" "}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.FirstName
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="FirstName"
                placeholder="First Name"
                value={this.state.FirstName}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.LastName
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="LastName"
                placeholder="Last Name"
                value={this.state.LastName}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            {" "}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.SecretQuestion
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="SecretQuestion"
                placeholder="Secret Question"
                value={this.state.SecretQuestion}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.SecretAnswer
              )}`}
            >
              {" "}
              <input
                type="text"
                className="form-control"
                name="SecretAnswer"
                placeholder="Secret Answer"
                value={this.state.SecretAnswer}
                onChange={this.handleUserInput}
              />{" "}
            </div>{" "}
          </div>{" "}
          <button onClick={this.handleSubmit} className="btn btn-primary">
            {" "}
            Sign up{" "}
          </button>{" "}
        </form>{" "}
        {/* zzz  5) Пропсы с маленькой буквы как и переменные */}
        <CheckCard
          CardNunmber={this.state.CardNunmber}
          updateData={this.updateData}
        />{" "}
      </div>
    );
  }
}

//  zzz 3) defaultProps желательно писать поменьше
// пропсы с маленькой буквы

CardForm.propTypes = {
  CardNunmber: PropTypes.string,
  CardExpirationDate: PropTypes.string,
  cvv: PropTypes.string,
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  SecretQuestion: PropTypes.string,
  SecretAnswer: PropTypes.string,
};

CardForm.defaultProps = {
  CardNunmber: "0000 0000 0000 0000",
  CardExpirationDate: "MM/YYYY",
  cvv: "CVV",
  FirstName: "First Name",
  LastName: "Last Name",
  SecretQuestion: "Secret Question",
  SecretAnswer: "Secret Answer",
};

export default CardForm;
