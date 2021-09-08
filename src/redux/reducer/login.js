import { FETCH_SUCCESS } from '../actions/actionTypes';

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
  default:
    return state;
  }
};

export default login;
