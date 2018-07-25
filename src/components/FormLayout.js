import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import FormError from './FormError.js'

class FormLayout extends Component {

  state = {
    validForm: false,
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    phoneValid: false,
    errors: {},
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }

  componentDidMount =() => {
    if(this.props.form !== 'create'){
      this.setState({
      validForm:true,
      firstNameValid: true,
      lastNameValid: true,
      emailValid: true,
      phoneValid: true,
      })
    }
  }

  //update state input as user types
  _handleInput = (e) => {
    const input = e.target.value
    const name = e.target.name
    this.setState({name:input}, () =>{
      //concurrently validate input
      this._validateInput(name, input)
    })
  }

  //validate form input
  _validateInput = (name, input) => {
    let {firstNameValid, lastNameValid, emailValid, phoneValid, errors} = this.state
    const nameError = "Names must be at least 2 characters"
    const phoneError = "Please enter a valid phone number"
    const emailError = "Please enter a valid email"
    switch(name){
      case 'firstName':
        firstNameValid = input.length > 1;
        errors.nameError = !firstNameValid ? nameError : ''
        break;
      case 'lastName':
        lastNameValid = input.length > 1;
        errors.nameError = !lastNameValid ? nameError : ''
        break;
      case 'phone':
        phoneValid = input.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\]{0,1}[0-9]{3}[-\s\]{0,1}[0-9]{4}$/)
        errors.phoneError = !phoneValid ? phoneError : ''
        break;
      case 'email':
        emailValid = input.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        errors.emailError = !emailValid ? emailError : ''
        break;
      default:
        break;
    }
    this.setState({firstNameValid,lastNameValid,emailValid, phoneValid, errors}, this._validateForm)
  }

  //validate form once all fields are correct
  _validateForm = () => {
    this.setState({validForm: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.phoneValid})
  }


  render(){
    const {currContact, form} = this.props
    const {errors} = this.state

    return (

      <div>
      <FormError errors={errors}/>

      {form === 'create' ? (
        <div className="create-contact-details">
          <input onChange={this._handleInput} type="text" name="firstName" placeholder="First Name"/>
          <input onChange={this._handleInput} type="text" name="lastName" placeholder="Last Name"/>
          <input onChange={this._handleInput} type="text" name="email" placeholder="Email"/>
          <input onChange={this._handleInput} type="text" name="phone" placeholder="Phone Number"/>
          <div className="select-style">
          <select name="status">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          </select>
          </div>
          <Button disabled={!this.state.validForm} type="submit"> Add Contact </Button>
        </div>


      ) : (
        <div className="create-contact-details">
          <input onChange={this._handleInput} type="text" name="firstName" defaultValue={currContact.firstName}/>
          <input onChange={this._handleInput} type="text" name="lastName" defaultValue={currContact.lastName}/>
          <input onChange={this._handleInput} type="text" name="email" defaultValue={currContact.email}/>
          <input onChange={this._handleInput} type="text" name="phone" defaultValue={currContact.phone}/>
          <div className="select-style">
          <select name="status">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          </select>
          </div>
          <Button disabled={!this.state.validForm} type="submit"> Edit Contact </Button>
        </div>
      )}
      </div>

    )
  }
}

export default FormLayout
