import { FETCH_SUCCESS, SAVE_DATA } from './actionTypes';

export const saveFormData = (state) => ({
  type: SAVE_DATA,
  ...state,
});

export const fetchSuccess = (token) => ({
  type: FETCH_SUCCESS,
  token,
});

export const fetchStartThunk = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const { token } = await response.json();
  dispatch(fetchSuccess(token));
};
