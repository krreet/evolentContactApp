export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const EDIT_STATUS = 'EDIT_STATUS'

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  contact
})

export const deleteContact = (contact) => ({
  type: DELETE_CONTACT,
  contact
})

export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  contact
})

export const editStatus = (contact) => ({
  type: EDIT_STATUS,
  contact
})
