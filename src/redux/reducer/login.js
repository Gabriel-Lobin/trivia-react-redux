import { FETCH_SUCCESS, RESET_STATE_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  token: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      token: action.token,
    };
  case RESET_STATE_LOGIN:
    return {
      ...state,
      token: '',
    }
  default:
    return state;
  }
};

export default login;
