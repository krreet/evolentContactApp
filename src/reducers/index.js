import {combineReducers} from 'redux'
import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT , EDIT_STATUS} from '../actions'

const initialState = {
  all_contacts: [
    {
      id : "ytbfdgfev",
      firstName : "REETESH",
      lastName : "KUMAR",
      email : "reetesh_kr@yahoo.com",
      phone : "9970459541",
      status : "Active"
    },
    {
      id : "etewtwgdh",
      firstName : "Deepak",
      lastName : "Singh",
      email : "DeepakSingh@yahoo.com",
      phone : "8522112523",
      status : "Inactive"
    },
     {
      id : "5643rgehfbvg",
      firstName : "Apoorva",
      lastName : "Singh",
      email : "ApoorvaSingh@yahoo.com",
      phone : "8522112523",
      status : "Active"
    }
  ]
}

function contacts(state=initialState, action){
  switch(action.type){
    case ADD_CONTACT:
      return {
        ...state,
        all_contacts: state.all_contacts.concat({
            id:action.contact.id,
            firstName: action.contact.firstName,
            lastName: action.contact.lastName,
            email: action.contact.email,
            phone: action.contact.phone,
            status: action.contact.status
          })
      }
    case DELETE_CONTACT:
      return {
        ...state,
        all_contacts: state.all_contacts.filter(contact => contact.id !== action.contact.id)
      }
    case EDIT_CONTACT:
      return {
        ...state,
        all_contacts: state.all_contacts.map(contact=>{
          if(contact.id===action.contact.id){
            return {
              ...contact,
              firstName: action.contact.firstName,
              lastName: action.contact.lastName,
              email: action.contact.email,
              phone: action.contact.phone,
              status: action.contact.status
            }
          }
          return contact
        })
      }
      case EDIT_STATUS:
      return {
        ...state,
        all_contacts: state.all_contacts.map(contact=>{
          if(contact.id===action.contact.id){
            if(contact.status == 'Inactive'){
            return {
              ...contact,
              status: 'Active'
            }
          }else{
            return {
              ...contact,
              status: 'Inactive'
            }
          }
          }
          return contact
        })
      }
    default:
      return state
  }
}

export default combineReducers({contacts})
