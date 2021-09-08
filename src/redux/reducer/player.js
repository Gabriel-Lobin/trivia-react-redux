import {
  SAVE_DATA, SET_ASSERTION, SET_SCORE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA:
    return {
      ...state,
      name: action.nameLogin,
      gravatarEmail: action.emailLogin,
    };
  case SET_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  case SET_ASSERTION:
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
