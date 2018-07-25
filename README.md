This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To see a demo of the app, please click here --> [Website](https://evolenthealth.herokuapp.com/)

## Folder Structure
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
|   └── manifest.json
└── src
    ├── actions
    │   └── index.js # actions to add/edit/delete contacts
    ├── reducers
    │   └── index.js # listens for actions and updates store. State is initialized with a single contact.
    ├── components
    |   ├── CreateContact.js # component to handle new contact creation
    │   ├── ListContacts.js # provides a list of contacts and search capability
    │   └── EditForm.js # edits a specific contact
    │   └── FormLayout.js # provides basic form layout and validation
    │   └── FormError.js # lists form errors
    ├── icons # Contains svg icons
    ├── App.css
    ├── App.js # Root of app.
    ├── App.test.js
    ├── index.css # Global styles
    └── index.js
    └── registerServiceWorker.js
```


To run the app, **follow these steps**:

## Quickstart

```sh
  npm install
  npm start
```

* `npm install`
* `npm start` is the JavaScript entry point.

This app is a React-Redux application that utilizes the React-Redux package. Although "vanilla" Redux could be used, React-Redux allows for more abstraction (e.g. do not have to pass store down components). Please note nothing is persisted so refreshing the page will default to the initial state.

A single actions file (`index.js`) contains several actions to add/create/delete contacts while a single reducer file (`index.js`) listens for any actions and updates the store accordingly. The reducer file also initializes the store with a contact.

The root file (`App.js`) leverages React-Redux's connect method to access the store and passes down state (all contacts) and action creators (such as add and delete) to child components.


#### components
This folder contains all the common components which are used throughout the project.

#### index.js
Index.js simply does client side rendering using the data provided 

#### modules
Modules are the way of organising different domain-specific modules in the project


**Routes**:
* `/`: list all contacts
* `/create`: create contact
* `/edit/:id`: edits a specific contact
