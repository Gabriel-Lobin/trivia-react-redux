import generateAnswersArray from '../../utils/generateAnswersArray';
import {
  FETCH_QUESTIONS,
  FETCH_SUCCESS,
  SAVE_DATA,
  UPDATE_SECOND,
  NEXT_QUESTION,
  START_CRONOMETER,
  STOP_CRONOMETER,
  BTN_NEXT,
  REVEAL_ANSWERS,
  SET_CHRONOMETER,
  SET_SCORE,
  SET_ASSERTION,
} from './actionTypes';

const BASE_URL = 'https://opentdb.com/api.php';
const GET_TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const BASE_AMOUNT = 5;

export const setChronometer = (chronometer) => ({
  type: SET_CHRONOMETER,
  chronometer,
});

export const setAssertions = () => ({
  type: SET_ASSERTION,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  score,
});

export const revealAnswers = (reveal) => ({
  type: REVEAL_ANSWERS,
  reveal,
});

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
    const { results } = await buffer.json();

    const questions = results.map((questionFromReq) => {
      const question = {
        ...questionFromReq,
        answers: generateAnswersArray(
          questionFromReq.incorrect_answers,
          questionFromReq.correct_answer,
        ),
      };

      delete question.correct_answer;
      delete question.incorrect_answers;

      return question;
    });

    dispatch(fetchQuestions(questions));
  }
);
export const fetchStartThunk = () => async (dispatch) => {
  const response = await fetch(GET_TOKEN_URL);
  const { token } = await response.json();
  localStorage.setItem('token', token);
  dispatch(fetchSuccess(token));
};
