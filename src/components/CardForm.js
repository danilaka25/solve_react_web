/* eslint-disable */
// @flow

import React from 'react';
import CheckCard from './CheckCard';
// import PropTypes from 'prop-types';

type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    paySystem: string
  ) => void,
};

type State = {
  cardNunmber: string,
  cardNunmberValid: boolean,
  cardExpirationDate: string,
  cardExpirationDateValid: boolean,
  cvv: string,
  cvvValid: boolean,
  firstName: string,
  firstNameValid: boolean,
  lastName: string,
  lastNameValid: boolean,
  secretQuestion: string,
  secretQuestionValid: boolean,
  secretAnswer: string,
  secretAnswerValid: boolean,
  formErrors: {
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
    f: string,
    g: string,
  },
  formValid: boolean,
  paySystem: string,
};

class CardForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      cardNunmber: '',
      cardNunmberValid: false,
      cardExpirationDate: '',
      cardExpirationDateValid: false,
      cvv: '',
      cvvValid: false,
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      secretQuestion: '',
      secretQuestionValid: false,
      secretAnswer: '',
      secretAnswerValid: false,
      formErrors: {
        cardNunmber: '',
        cardExpirationDate: '',
        cvv: '',
        firstName: '',
        lastName: '',
        secretQuestion: '',
        secretAnswer: '',
      },
      formValid: false,
      paySystem: '--',
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
    let cardNunmberValid = this.state.cardNunmberValid;
    let cardExpirationDateValid = this.state.cardExpirationDateValid;
    let cvvValid = this.state.cvvValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let secretQuestionValid = this.state.secretQuestionValid;
    let secretAnswerValid = this.state.secretAnswerValid;
    switch (fieldName) {
      case 'cardNunmber':
        fieldName = value.match(/^[0-9]{16}$/);
        if (fieldName) {
          cardNunmberValid = true;
          fieldValidationErrors.cardNunmber = '';
        } else {
          cardNunmberValid = false;
          fieldValidationErrors.cardNunmber = ' is invalid';
        }
        break;
      case 'cardExpirationDate':
        fieldName = value.match(
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/
        );
        if (fieldName) {
          cardExpirationDateValid = true;
          fieldValidationErrors.cardExpirationDate = '';
        } else {
          cardExpirationDateValid = false;
          fieldValidationErrors.cardExpirationDate = ' is invalid';
        }
        break;
      case 'cvv':
        fieldName = value.match(/^[0-9]{3,4}$/);
        if (fieldName) {
          cvvValid = true;
          fieldValidationErrors.cvv = '';
        } else {
          cvvValid = false;
          fieldValidationErrors.cvv = ' is invalid';
        }
        break;
      case 'firstName':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          firstNameValid = true;
          fieldValidationErrors.firstName = '';
        } else {
          firstNameValid = false;
          fieldValidationErrors.firstName = ' is invalid';
        }
        break;
      case 'lastName':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          lastNameValid = true;
          fieldValidationErrors.lastName = '';
        } else {
          lastNameValid = false;
          fieldValidationErrors.lastName = ' is invalid';
        }
        break;
      case 'secretQuestion':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          secretQuestionValid = true;
          fieldValidationErrors.secretQuestion = '';
        } else {
          secretQuestionValid = false;
          fieldValidationErrors.secretQuestion = ' is invalid';
        }
        break;
      case 'secretAnswer':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          secretAnswerValid = true;
          fieldValidationErrors.secretAnswer = '';
        } else {
          secretAnswerValid = false;
          fieldValidationErrors.secretAnswer = ' is invalid';
        }
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      cardNunmberValid: cardNunmberValid,
      cardExpirationDateValid: cardExpirationDateValid,
      cvvValid: cvvValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
      secretQuestionValid: secretQuestionValid,
      secretAnswerValid: secretAnswerValid,
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
      // this.state.cardNunmberValid &&
      // this.state.cardExpirationDateValid &&
      // this.state.cvvValid &&
      this.state.firstNameValid &&
      this.state.lastNameValid
      // this.state.secretQuestionValid &&
      // this.state.secretAnswerValid

      // zzz  6) Думаю эта функция работает, но выглядит неправильно с точки зрения чистого кода
    ) {
      this.setState({
        formValid: 'true',
      });
    } else {
      this.setState({
        formValid: 'false',
      });
    }
     console.log(this.state.formValid);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      return;
    }

    this.props.updateData(
      this.state.firstName,
      this.state.lastName,
      this.state.cardNunmber,
      this.state.formValid,
      this.state.paySystem // post
    );
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    // console.log("(render) CardForm");
    return (
      <div>
        {' '}
        <form className="demoForm">
          {' '}
          <h2> Form </h2>{' '}
          <div className="panel panel-default">
            {' '}
            {/*<FormErrors formErrors={this.state.formErrors} />*/}{' '}
          </div>{' '}
          <div className="card_row">
            {' '}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.cardNunmber
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="cardNunmber"
                placeholder="Card Nunmber"
                value={this.state.cardNunmber}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.cardExpirationDate
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="cardExpirationDate"
                placeholder="mm/yyyy"
                value={this.state.cardExpirationDate}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.cvv
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="cvv"
                placeholder="cvv"
                value={this.state.cvv}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
          </div>{' '}
          <div className="row">
            {' '}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.firstName
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.lastName
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
          </div>{' '}
          <div className="row">
            {' '}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.secretQuestion
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="secretQuestion"
                placeholder="Secret Question"
                value={this.state.secretQuestion}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
            <div
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.secretAnswer
              )}`}
            >
              {' '}
              <input
                type="text"
                className="form-control"
                name="secretAnswer"
                placeholder="Secret Answer"
                value={this.state.secretAnswer}
                onChange={this.handleUserInput}
              />{' '}
            </div>{' '}
          </div>{' '}
          <button onClick={this.handleSubmit} className="btn btn-primary">
            {' '}
            Sign up{' '}
          </button>{' '}
        </form>{' '}
        {/* zzz  5) Пропсы с маленькой буквы как и переменные */}
        <CheckCard
          cardNunmber={this.state.cardNunmber}
          updateData={this.updateData}
        />{' '}
      </div>
    );
  }
}

//  zzz 3) defaultProps желательно писать поменьше
// пропсы с маленькой буквы

// CardForm.propTypes = {
//   cardNunmber: PropTypes.string,
//   cardExpirationDate: PropTypes.string,
//   cvv: PropTypes.string,
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   secretQuestion: PropTypes.string,
//   secretAnswer: PropTypes.string,
// };

// CardForm.defaultProps = {
//   cardNunmber: '0000 0000 0000 0000',
//   cardExpirationDate: 'MM/YYYY',
//   cvv: 'CVV',
//   firstName: 'First Name',
//   lastName: 'Last Name',
//   secretQuestion: 'Secret Question',
//   secretAnswer: 'Secret Answer',
// };

export default CardForm;
