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

export const addTechs = tech => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
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
