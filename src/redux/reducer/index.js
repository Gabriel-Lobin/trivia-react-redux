import { combineReducers } from 'redux';
import player from './player';
import questions from './questions';
import timer from './timer';
import login from './login';

const rootReducer = combineReducers({
  login,
  player,
  questions,
  timer,
});

export default rootReducer;
