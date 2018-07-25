import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';
import FormLayout from './FormLayout.js'

class CreateContact extends Component {
   state = {
     finalInput:{}
   }
  
  //handle submit occurs once validation is completed from FormLayout component
   _handleSubmit = (e) => {
      e.preventDefault()
      const values = serializeForm(e.target, { hash: true})
      values.firstName = values.firstName;
      values.lastName = values.lastName;
      values.id = Math.random().toString(36).substr(2,10);
      if ( this.props.onCreateContact){
      this.setState({finalInput:values}, ()=>{
        
        this.props.onCreateContact(values)
      })}
   }

   render() {
      return(
         <div>
            <Link className="close-create-contact" to="/">Close</Link>
            <form onSubmit={this._handleSubmit} className="create-contact-form">
               <FormLayout form={"create"}/>
            </form>
         </div>
      )
   }
}

export default CreateContact
