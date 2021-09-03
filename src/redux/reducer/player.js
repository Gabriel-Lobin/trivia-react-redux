import { FETCH_QUESTIONS, FETCH_SUCCESS, SAVE_DATA } from '../actions/actionTypes';

const INITIAL_STATE = {
  nome: '',
  email: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  case FETCH_SUCCESS:
    return {
      ...state,
      token: action.token,
    };
  case SAVE_DATA:
    return {
      ...state,
      nome: action.nameLogin,
      email: action.emailLogin,
    };
  default:
    return state;
  }
};

export default player;
