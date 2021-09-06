import {
  FETCH_QUESTIONS,
  NEXT_QUESTION,
  UPDATE_SECOND,
  START_CRONOMETER,
  STOP_CRONOMETER,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
  currentQuestion: 0,
  time: 30,
  timer: true,
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_QUESTIONS:
    return {
      ...state,
      data: action.data,
    };
  case UPDATE_SECOND:
    return {
      ...state,
      time: state.time - 1,
    };
  case NEXT_QUESTION:
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
      time: 30,
    };
  case START_CRONOMETER:
    return {
      ...state,
      timer: true,
    };
  case STOP_CRONOMETER:
    return {
      ...state,
      timer: false,
    };
  default:
    return state;
  }
};

export default questions;
