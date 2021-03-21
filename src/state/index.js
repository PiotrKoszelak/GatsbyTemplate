import {
  combineReducers
} from 'redux';
import {
  firestoreReducer
} from 'redux-firestore';
import {
  firebaseReducer
} from 'react-redux-firebase';
import other from './reducers/other';
import loginStatus from './reducers/login';

export default combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  other,
  loginStatus
});
