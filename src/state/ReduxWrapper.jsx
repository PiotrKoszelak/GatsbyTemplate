import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  createStore as reduxCreateStore, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import {
  reduxFirestore
} from 'redux-firestore';
import {
  reactReduxFirebase
} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import rootReducer from '.';
import getFirebase from '../utils/firebase';

const lazyApp = import('firebase/app');
const lazyLogin = import('firebase/auth');
const lazyFirestore = import('firebase/firestore');

let createStore = () => reduxCreateStore(rootReducer,
  compose(
    applyMiddleware(thunk)
  ));

Promise.all([lazyApp, lazyLogin, lazyFirestore]).then(([firebase]) => {
  const firebaseInst = getFirebase(firebase);
  createStore = () => reduxCreateStore(rootReducer,
    compose(
      applyMiddleware(thunk),
      reduxFirestore(firebaseInst),
      reactReduxFirebase(firebaseInst, {
        useFirestoreForProfile: true, userProfile: 'users'
      })
    ));
});

const ReduxWrapper = ({
  element
}) => (
  <Provider store={createStore()}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired
};
export default ReduxWrapper;
