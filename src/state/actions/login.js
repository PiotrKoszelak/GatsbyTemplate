import getFirebase from '../../utils/firebase';

import {
  LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_RESET
} from '../reducers/login';

const lazyApp = import('firebase/app');
const lazyLogin = import('firebase/auth');

const loginStart = () => ({
  type: LOGIN_STARTED
});

const loginSucceed = () => ({
  type: LOGIN_SUCCESS
});

const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export const loginReset = () => ({
  type: LOGIN_RESET
});

const login = (username, password) => dispatch => {
  dispatch(loginStart());
  Promise.all([lazyApp, lazyLogin]).then(() => {
    const firebaseInst = getFirebase();
    firebaseInst
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => dispatch(loginSucceed()))
      .catch(error => dispatch(loginError(error)));
  });
};

export default login;
