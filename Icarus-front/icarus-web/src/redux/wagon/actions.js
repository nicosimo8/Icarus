import {
  GET_WAGONS_PENDING,
  GET_WAGONS_ERROR,
  GET_WAGONS_SUCCESS,

  GET_WAGON_BY_ID_PENDING,
  GET_WAGON_BY_ID_ERROR,
  GET_WAGON_BY_ID_SUCCESS,

  ADD_WAGON_PENDING,
  ADD_WAGON_ERROR,
  ADD_WAGON_SUCCESS,

  DEL_WAGON_PENDING,
  DEL_WAGON_ERROR,
  DEL_WAGON_SUCCESS,

  PUT_WAGON_PENDING,
  PUT_WAGON_ERROR,
  PUT_WAGON_SUCCESS,

  UP_WAGON_PENDING,
  UP_WAGON_ERROR,
  UP_WAGON_SUCCESS,

  DOWN_WAGON_PENDING,
  DOWN_WAGON_ERROR,
  DOWN_WAGON_SUCCESS
} from './constants';

export const getWagonsPending = () => {
  return {
    type: GET_WAGONS_PENDING
  }
};

export const getWagonsError = (error) => {
  return {
    type: GET_WAGONS_ERROR,
    payload: error
  }
};

export const getWagonsSuccess = (data) => {
  return {
    type: GET_WAGONS_SUCCESS,
    payload: data
  }
};

export const getWagonByIdPending = () => {
  return {
    type: GET_WAGON_BY_ID_PENDING
  }
};

export const getWagonByIdError = (error) => {
  return {
    type: GET_WAGON_BY_ID_ERROR,
    payload: error
  }
};

export const getWagonByIdSuccess = (data) => {
  return {
    type: GET_WAGON_BY_ID_SUCCESS,
    payload: data
  }
};

export const addWagonPending = () => {
  return {
    type: ADD_WAGON_PENDING
  }
};

export const addWagonError = (error) => {
  return {
    type: ADD_WAGON_ERROR,
    payload: error
  }
};

export const addWagonSuccess = () => {
  return {
    type: ADD_WAGON_SUCCESS
  }
};

export const delWagonPending = () => {
  return {
    type: DEL_WAGON_PENDING
  }
};

export const delWagonError = (error) => {
  return {
    type: DEL_WAGON_ERROR,
    payload: error
  }
};

export const delWagonSuccess = () => {
  return {
    type: DEL_WAGON_SUCCESS
  }
};

export const putWagonPending = () => {
  return {
    type: PUT_WAGON_PENDING
  }
};

export const putWagonError = (error) => {
  return {
    type: PUT_WAGON_ERROR,
    payload: error
  }
};

export const putWagonSuccess = () => {
  return {
    type: PUT_WAGON_SUCCESS
  }
};

export const upWagonPending = () => {
  return {
    type: UP_WAGON_PENDING
  }
};

export const upWagonError = (error) => {
  return {
    type: UP_WAGON_ERROR,
    payload: error
  }
};

export const upWagonSuccess = () => {
  return {
    type: UP_WAGON_SUCCESS
  }
};

export const downWagonPending = () => {
  return {
    type: DOWN_WAGON_PENDING
  }
};

export const downWagonError = (error) => {
  return {
    type: DOWN_WAGON_ERROR,
    payload: error
  }
};

export const downWagonSuccess = () => {
  return {
    type: DOWN_WAGON_SUCCESS
  }
};
