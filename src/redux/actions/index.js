import {
  FETCH_QUESTIONS,
  FETCH_SUCCESS,
  SAVE_DATA,
  UPDATE_SECOND,
  NEXT_QUESTION,
  START_CRONOMETER,
  STOP_CRONOMETER,
  BTN_NEXT,
} from './actionTypes';

const BASE_URL = 'https://opentdb.com/api.php';
const GET_TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const BASE_AMOUNT = 5;

export const fetchQuestions = (data) => ({
  type: FETCH_QUESTIONS,
  data,
});

export const saveFormData = (state) => ({
  type: SAVE_DATA,
  ...state,
});

export const fetchSuccess = (token) => ({
  type: FETCH_SUCCESS,
  token,
});

export const updateSeconds = () => ({
  type: UPDATE_SECOND,
});

export const nextQuestions = (currentQuestion) => ({
  type: NEXT_QUESTION,
  currentQuestion,
});

export const startCronometer = () => ({
  type: START_CRONOMETER,
});

export const stopCronometer = () => ({
  type: STOP_CRONOMETER,
});

export const btnNext = () => ({
  type: BTN_NEXT,
});

export const fetchQuestionsThunk = ({ amount = BASE_AMOUNT, token }) => (
  async (dispatch) => {
    const buffer = await fetch(`${BASE_URL}?amount=${amount}&token=${token}`);
    const response = await buffer.json();
    console.log(token, response);
    dispatch(fetchQuestions(response.results));
  }
);
export const fetchStartThunk = () => async (dispatch) => {
  const response = await fetch(GET_TOKEN_URL);
  const { token } = await response.json();
  localStorage.setItem('token', token);
  dispatch(fetchSuccess(token));
};
