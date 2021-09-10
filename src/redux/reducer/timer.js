import {
  SET_CHRONOMETER,
  RESET_TIME,
  UPDATE_SECOND,
  START_CRONOMETER,
  STOP_CRONOMETER,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  chronometer: null,
  time: 30,
  timer: true,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CHRONOMETER:
    return {
      ...state,
      chronometer: action.chronometer,
    };
  case UPDATE_SECOND:
    return {
      ...state,
      time: state.time - 1,
    };
  case RESET_TIME:
    return {
      ...state,
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

export default timer;
