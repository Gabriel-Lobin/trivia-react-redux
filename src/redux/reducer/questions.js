import { FETCH_QUESTIONS } from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
};

const questions = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
  case FETCH_QUESTIONS:
    return {
      ...state,
      data,
    };
  default:
    return state;
  }
};

export default questions;
