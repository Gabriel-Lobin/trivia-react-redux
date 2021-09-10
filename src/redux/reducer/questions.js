import {
  FETCH_QUESTIONS,
  NEXT_QUESTION,
  HIDDEN_NEXT_BUTTON,
  BTN_NEXT,
  REVEAL_ANSWERS,
  RESET_STATE_QUESTIONS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
  currentQuestion: 0,
  btnNext: false,
  reveal: false,
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REVEAL_ANSWERS:
    return {
      ...state,
      reveal: action.reveal,
    };
  case FETCH_QUESTIONS:
    return {
      ...state,
      data: action.data,
    };
  case NEXT_QUESTION:
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
      btnNext: false,
    };
  case HIDDEN_NEXT_BUTTON:
    return {
      ...state,
      btnNext: false,
    };
  case BTN_NEXT:
    return {
      ...state, btnNext: true,
    };
  case RESET_STATE_QUESTIONS:
    return {
      ...state,
      data: [],
      currentQuestion: 0,
      btnNext: false,
      reveal: false,
    };
  default:
    return state;
  }
};

export default questions;
