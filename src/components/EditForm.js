import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';
// import PropTypes from 'prop-types'
import FormLayout from './FormLayout.js'

class EditForm extends Component{
  state = {
    finalInput: {}
  }

  // static propTypes = {
  //    allContacts: PropTypes.array.isRequired,
  //    onEditContact: PropTypes.Function.isRequired
  // }

  //submit button enabled once inputs are valid from FormLayout component
  _handleSubmit = (e) => {
     e.preventDefault()
     const values = serializeForm(e.target, { hash: true});
     values.id = this.props.match.params.id
     if ( this.props.onEditContact){
       this.setState({finalInput:values}, ()=> this.props.onEditContact(values))
     }

  }

  render(){
    const {allContacts} = this.props
    let currContact
    allContacts.map(contact=>{
      if(contact.id===this.props.match.params.id){
        currContact = contact
      }
      return currContact
    })
    return (
      <div>
        <Link className="close-create-contact" to="/">Close</Link>
        <form onSubmit={this._handleSubmit} className="create-contact-form">
          <FormLayout currContact={currContact}/>
        </form>
      </div>

    )
  }
}

export default EditForm
