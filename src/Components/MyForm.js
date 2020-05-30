import React, { Component, Fragment } from 'react';
import ReactDom, { render } from 'react-dom';
import '../CSS/style.css';

import { Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const trace = (x) => {console.log('trace:', x); return x}


class MyForm extends Component {
  state = {
    productName: '',
    lastName: '',
    email: '',
    biller:'',
    validationErrors: {}
  };

  validators = {
    biller: (str) => str === '' ? 'Cannot be blank' : '',
    productName: (str) => str === '' ? 'Cannot be blank' : '',
    lastName: (str) => str === '' ? 'Cannot be blank' : '',
    email: (str) => !/.+@.+\..+/.test(str) ? 'Invalid email address' : ''
  }

  validate = (name) => {
    const value = this.state[name];
    let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
    this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
    return error;
  }

  handleChange = (e) => {
    const fieldName = e.currentTarget.name;
    console.log(fieldName)
    console.log(e.currentTarget.value)
    this.setState(
      { [fieldName]: e.currentTarget.value },
      () => this.validate(fieldName)
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
    if (isValid) {
      console.log("form is submitted")
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
       <div style={{width:"40%"}} className="FormGroup col-md-4">
        <ValidatingFormGroup
          label='Biller'
          fieldName='biller'
          value={this.state.biller}
          handleChange={this.handleChange}
          placeHolder='Biller'
          validationErrors={this.state.validationErrors}
        />
  
        <ValidatingFormGroup
          label='Last name'
          fieldName='lastName'
          value={this.state.lastName}
          handleChange={this.handleChange}
          placeHolder='Last Name'
          validationErrors={this.state.validationErrors}
        />

        <ValidatingFormGroup
          label='Email'
          fieldName='email'
          value={this.state.email}
          handleChange={this.handleChange}
          placeHolder='Email address'
          validationErrors={this.state.validationErrors}
        /> 
    
         </div>
      <div style={{width:"50%",float:"right"}} className="FormGroup col-md-4">
        <ValidatingFormGroup
          label='Product name'
          fieldName='productName'
          value={this.state.productName}
          handleChange={this.handleChange}
          placeHolder='Product Name'
          validationErrors={this.state.validationErrors}
        />
  
        <ValidatingFormGroup
          label='Last name'
          fieldName='lastName'
          value={this.state.lastName}
          handleChange={this.handleChange}
          placeHolder='Last Name'
          validationErrors={this.state.validationErrors}
        />

        <ValidatingFormGroup
          label='Email'
          fieldName='email'
          value={this.state.email}
          handleChange={this.handleChange}
          placeHolder='Email address'
          validationErrors={this.state.validationErrors}
        /> 
        <Button type="submit">Submit</Button>
         </div>
      </form>    )
  }
}

const getValidationState = (validationErrors, name) =>  {
  const err = validationErrors[name];
  return typeof err === 'undefined' ? null : err === '' ? 'success' : 'error';
}

const ValidatingFormGroup = ({label, fieldName, value, handleChange, placeHolder, validationErrors}) =>
  <FormGroup
    validationState={getValidationState(validationErrors, fieldName)}
   >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text"
      name={fieldName}
      value={value}
      placeholder={placeHolder}
      onChange={handleChange}
   
    />
    
    <HelpBlock>{validationErrors[fieldName]}</HelpBlock>
  </FormGroup>

class Form extends Component {
  render() {
    return (
      <div>
        <MyForm/>
      </div>
    );
  }
}

export default Form;