/* eslint-disable */
// @flow

import React from 'react';
import CheckCard from './CheckCard';
import { connect } from 'react-redux';
import { onSubmit } from '../actions/onSubmit';

type Props = {
  onSubmit: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
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
    cardNunmber: string,
    cardExpirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  },
  formValid: string, // c boolen не передается вверх по дереву
  paySystem: string,
};

class CardForm extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  // static defaultProps = {
  //   cardNunmber: '0000 0000 0000 0000',
  //   cardExpirationDate: 'MM/YYYY',
  //   cvv: 'CVV',
  //   firstName: 'First Name',
  //   lastName: 'Last Name',
  //   secretQuestion: 'Secret Question',
  //   secretAnswer: 'Secret Answer',
  // };

  constructor(props: Props) {
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
      formValid: 'false',
      paySystem: '--',
    };
  }

  handleUserInput = (e: Object) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      },
    );
  };

  validateField(fieldName: Function, value: string) {
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
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/,
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

  updateData = (paySystem: string) => {
    if (this.state.paySystem !== paySystem) {
      this.setState({
        paySystem: paySystem,
      });
    }
  };

  handleSubmit = (event: Object) => {
    event.preventDefault();
    if (
      // this.state.cardNunmberValid &&
      // this.state.cardExpirationDateValid &&
      // this.state.cvvValid &&
      this.state.firstNameValid &&
      this.state.lastNameValid
      // this.state.secretQuestionValid &&
      // this.state.secretAnswerValid
    ) {
      this.setState(
        // zzz  6) Думаю эта функция работает, но выглядит неправильно с точки зрения чистого кода
        {
          formValid: 'true',
        },
        function() {
          // this.props.updateData(
          //   this.state.firstName,
          //   this.state.lastName,
          //   this.state.cardNunmber,
          //   this.state.formValid,
          //   this.state.paySystem,
          // );

          this.props.onSubmit(
            this.state.firstName,
            this.state.lastName,
            this.state.cardNunmber,
            this.state.formValid,
            this.state.paySystem,
          );
        },
      );
    } else {
      this.setState(
        {
          formValid: 'false',
        },
        function() {
          this.props.onSubmit(
            this.state.firstName,
            this.state.lastName,
            this.state.cardNunmber,
            this.state.formValid,
            this.state.paySystem,
          );
        },
      );
    }

    // console.log(this.props.onSubmit())
  };

  errorClass(error: Object) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    //  console.log("(render) CardForm");
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
                this.state.formErrors.cardNunmber,
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
                this.state.formErrors.cardExpirationDate,
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
                this.state.formErrors.cvv,
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
                this.state.formErrors.firstName,
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
                this.state.formErrors.lastName,
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
                this.state.formErrors.secretQuestion,
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
                this.state.formErrors.secretAnswer,
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
        <CheckCard
          cardNunmber={this.state.cardNunmber}
          updateData={this.updateData}
        />{' '}
      </div>
    );
  }
}

const FormContainer = connect(
  state => ({
    //value_1: state.counterReducer,
    form: state.formReducer,
  }),
  {
    // addValue,
    onSubmit,
  },
)(CardForm);

//export default Component4Container

export default FormContainer;
