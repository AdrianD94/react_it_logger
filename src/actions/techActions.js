import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECH_ERROR,
  SET_LOADING
} from '../actions/types';

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.data
    });
  }
};

const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
