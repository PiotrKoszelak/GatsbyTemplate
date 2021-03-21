export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_RESET = 'LOGIN_RESET';

const loginStatus = (state = {
  isLoading: false, error: null, success: null
}, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        isLoading: true, error: null, success: null
      };
    case 'LOGIN_SUCCESS':
      return {
        isLoading: false, error: null, success: true
      };
    case 'LOGIN_ERROR':
      return {
        isLoading: false, error: action.error, success: false
      };
    case 'LOGIN_RESET':
      return {
        isLoading: false, error: null, success: null
      };
    default:
      return state;
  }
};

export default loginStatus;
