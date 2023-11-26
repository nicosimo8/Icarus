import {
  GET_MEGAUSERS_PENDING,
  GET_MEGAUSERS_ERROR,
  GET_MEGAUSERS_SUCCESS,

  GET_MEGAUSER_BY_ID_PENDING,
  GET_MEGAUSER_BY_ID_ERROR,
  GET_MEGAUSER_BY_ID_SUCCESS,

  ADD_MEGAUSER_PENDING,
  ADD_MEGAUSER_ERROR,
  ADD_MEGAUSER_SUCCESS,

  DEL_MEGAUSER_PENDING,
  DEL_MEGAUSER_ERROR,
  DEL_MEGAUSER_SUCCESS,

  PUT_MEGAUSER_PENDING,
  PUT_MEGAUSER_ERROR,
  PUT_MEGAUSER_SUCCESS,

  UP_MEGAUSER_PENDING,
  UP_MEGAUSER_ERROR,
  UP_MEGAUSER_SUCCESS,

  DOWN_MEGAUSER_PENDING,
  DOWN_MEGAUSER_ERROR,
  DOWN_MEGAUSER_SUCCESS
} from './constants';

export const getMegaUsersPending = () => {
  return {
    type: GET_MEGAUSERS_PENDING
  }
};

export const getMegaUsersError = (error) => {
  return {
    type: GET_MEGAUSERS_ERROR,
    payload: error
  }
};

export const getMegaUsersSuccess = (data) => {
  return {
    type: GET_MEGAUSERS_SUCCESS,
    payload: data
  }
};

export const getMegaUserByIdPending = () => {
  return {
    type: GET_MEGAUSER_BY_ID_PENDING
  }
};

export const getMegaUserByIdError = (error) => {
  return {
    type: GET_MEGAUSER_BY_ID_ERROR,
    payload: error
  }
};

export const getMegaUserByIdSuccess = (data) => {
  return {
    type: GET_MEGAUSER_BY_ID_SUCCESS,
    payload: data
  }
};

export const addMegaUserPending = () => {
  return {
    type: ADD_MEGAUSER_PENDING
  }
};

export const addMegaUserError = (error) => {
  return {
    type: ADD_MEGAUSER_ERROR,
    payload: error
  }
};

export const addMegaUserSuccess = () => {
  return {
    type: ADD_MEGAUSER_SUCCESS
  }
};

export const delMegaUserPending = () => {
  return {
    type: DEL_MEGAUSER_PENDING
  }
};

export const delMegaUserError = (error) => {
  return {
    type: DEL_MEGAUSER_ERROR,
    payload: error
  }
};

export const delMegaUserSuccess = () => {
  return {
    type: DEL_MEGAUSER_SUCCESS
  }
};

export const putMegaUserPending = () => {
  return {
    type: PUT_MEGAUSER_PENDING
  }
};

export const putMegaUserError = (error) => {
  return {
    type: PUT_MEGAUSER_ERROR,
    payload: error
  }
};

export const putMegaUserSuccess = () => {
  return {
    type: PUT_MEGAUSER_SUCCESS
  }
};

export const upMegaUserPending = () => {
  return {
    type: UP_MEGAUSER_PENDING
  }
};

export const upMegaUserError = (error) => {
  return {
    type: UP_MEGAUSER_ERROR,
    payload: error
  }
};

export const upMegaUserSuccess = () => {
  return {
    type: UP_MEGAUSER_SUCCESS
  }
};

export const downMegaUserPending = () => {
  return {
    type: DOWN_MEGAUSER_PENDING
  }
};

export const downMegaUserError = (error) => {
  return {
    type: DOWN_MEGAUSER_ERROR,
    payload: error
  }
};

export const downMegaUserSuccess = () => {
  return {
    type: DOWN_MEGAUSER_SUCCESS
  }
};
