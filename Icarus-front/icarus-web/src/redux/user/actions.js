import {
  GET_USERS_PENDING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,

  GET_USER_BY_ID_PENDING,
  GET_USER_BY_ID_ERROR,
  GET_USER_BY_ID_SUCCESS,

  ADD_USER_PENDING,
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,

  DEL_USER_PENDING,
  DEL_USER_ERROR,
  DEL_USER_SUCCESS,

  PUT_USER_PENDING,
  PUT_USER_ERROR,
  PUT_USER_SUCCESS,

  UP_USER_PENDING,
  UP_USER_ERROR,
  UP_USER_SUCCESS,

  DOWN_USER_PENDING,
  DOWN_USER_ERROR,
  DOWN_USER_SUCCESS
} from './constants';

export const getUsersPending = () => {
  return {
    type: GET_USERS_PENDING
  }
};

export const getUsersError = (error) => {
  return {
    type: GET_USERS_ERROR,
    payload: error
  }
};

export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data
  }
};

export const getUserByIdPending = () => {
  return {
    type: GET_USER_BY_ID_PENDING
  }
};

export const getUserByIdError = (error) => {
  return {
    type: GET_USER_BY_ID_ERROR,
    payload: error
  }
};

export const getUserByIdSuccess = (data) => {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    payload: data
  }
};

export const addUserPending = () => {
  return {
    type: ADD_USER_PENDING
  }
};

export const addUserError = (error) => {
  return {
    type: ADD_USER_ERROR,
    payload: error
  }
};

export const addUserSuccess = () => {
  return {
    type: ADD_USER_SUCCESS
  }
};

export const delUserPending = () => {
  return {
    type: DEL_USER_PENDING
  }
};

export const delUserError = (error) => {
  return {
    type: DEL_USER_ERROR,
    payload: error
  }
};

export const delUserSuccess = () => {
  return {
    type: DEL_USER_SUCCESS
  }
};

export const putUserPending = () => {
  return {
    type: PUT_USER_PENDING
  }
};

export const putUserError = (error) => {
  return {
    type: PUT_USER_ERROR,
    payload: error
  }
};

export const putUserSuccess = () => {
  return {
    type: PUT_USER_SUCCESS
  }
};

export const upUserPending = () => {
  return {
    type: UP_USER_PENDING
  }
};

export const upUserError = (error) => {
  return {
    type: UP_USER_ERROR,
    payload: error
  }
};

export const upUserSuccess = () => {
  return {
    type: UP_USER_SUCCESS
  }
};

export const downUserPending = () => {
  return {
    type: DOWN_USER_PENDING
  }
};

export const downUserError = (error) => {
  return {
    type: DOWN_USER_ERROR,
    payload: error
  }
};

export const downUserSuccess = () => {
  return {
    type: DOWN_USER_SUCCESS
  }
};
