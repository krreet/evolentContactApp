import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const styles = {
  root: {
    marginRight: 10,
  }
};
class ListContacts extends React.Component {

  state = {
    query: ''
  }

  // utilizing propTypes for typechecking
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  _updateQuery = (event) => {
    //update query state & trim whitespaces
    this.setState({ query: event.target.value.trim() })
  }
  _clearQuery = () => {
    this.setState({
      query: ''
    })
  }
  handleChange = (event, checked) => {
    console.log(checked);

  };
  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    let showingContacts
    if (query) {
      //ignore caps
      const match = new RegExp(escapeRegExp(query), 'i');
      showingContacts = contacts.filter((contact) => match.test(contact.firstName))
    } else {
      showingContacts = contacts
    }

    // sort contacts by first name
    showingContacts.sort(sortBy('firstName'))

 

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>

          <input
            className='search-contacts'
            type='text'
            placeholder='Search by first name'
            value={query}
            onChange={(event) => this._updateQuery(event)}
          />
          <Link to="/create" className='add-contact' >Go to create Contacts</Link>
        </div>



        {showingContacts.length !== contacts.length && (
          <div className='showingContacts showing'>
            <span> Now showing {showingContacts.length} of {contacts.length} total </span>
            <Button color="primary" onClick={this._clearQuery}> Show all </Button>
          </div>
        )}

        <ol className='contact-list'>
          {showingContacts.map((contact) => {


            return (contact.status === 'Active' ? (
              <li key={contact.id} className='contact-list-item-active'>
                <div className='contact-details'>
                  <h3>{contact.firstName} {contact.lastName}</h3>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>

                  <p className="green">{contact.status}</p>


                </div>
                <div>
                <Switch checked={contact.status === 'Active'} onChange={this.handleChange} aria-label="EnableSwitch" 
          
                />
                
                </div>
                <Link to={`/edit/${contact.id}`}>
                  <Button className={this.props.classes.root} mini color="primary" variant="contained">
                  Edit
                    <EditIcon/>
                  </Button>
                </Link>
             <div>
                <Button className={this.props.classes.root} mini color="secondary" variant="contained" onClick={() => onDeleteContact(contact)}>
                Delete
                  <DeleteIcon/>
                </Button>
                </div>

                 
              </li>
            ) : (

                <li key={contact.id} className='contact-list-item-inactive'>
                  <div className='contact-details'>
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>

                    <p className="red">{contact.status}</p>

                  
              </div>
              <div>
                <Switch checked={contact.status === 'Active'} onChange={this.handleChange} aria-label="EnableSwitch" 
          
                />
                
                </div>
                <Link to={`/edit/${contact.id}`}>
                  <Button className={this.props.classes.root} mini color="primary" variant="contained">
                  Edit
                    <EditIcon/>
                  </Button>
                </Link>
             <div>
                <Button className={this.props.classes.root} mini color="secondary" variant="contained" onClick={() => onDeleteContact(contact)}>
                Delete
                  <DeleteIcon/>
                </Button>
                </div>
                </li>

              )





            )

          }
          )}
        </ol>
      </div>
    )
  }
}


export default withStyles(styles)(ListContacts)
