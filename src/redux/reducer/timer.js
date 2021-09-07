import {
  SET_CHRONOMETER,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  chronometer: null,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CHRONOMETER:
    return {
      ...state,
      chronometer: action.chronometer,
    };
  default:
    return state;
  }
};

export default timer;
