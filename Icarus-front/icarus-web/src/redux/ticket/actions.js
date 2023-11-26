import {
  GET_TICKETS_PENDING,
  GET_TICKETS_ERROR,
  GET_TICKETS_SUCCESS,

  GET_TICKET_BY_ID_PENDING,
  GET_TICKET_BY_ID_ERROR,
  GET_TICKET_BY_ID_SUCCESS,

  ADD_TICKET_PENDING,
  ADD_TICKET_ERROR,
  ADD_TICKET_SUCCESS,

  DEL_TICKET_PENDING,
  DEL_TICKET_ERROR,
  DEL_TICKET_SUCCESS,

  PUT_TICKET_PENDING,
  PUT_TICKET_ERROR,
  PUT_TICKET_SUCCESS,

  UP_TICKET_PENDING,
  UP_TICKET_ERROR,
  UP_TICKET_SUCCESS,

  DOWN_TICKET_PENDING,
  DOWN_TICKET_ERROR,
  DOWN_TICKET_SUCCESS
} from './constants';

export const getTicketsPending = () => {
  return {
    type: GET_TICKETS_PENDING
  }
};

export const getTicketsError = (error) => {
  return {
    type: GET_TICKETS_ERROR,
    payload: error
  }
};

export const getTicketsSuccess = (data) => {
  return {
    type: GET_TICKETS_SUCCESS,
    payload: data
  }
};

export const getTicketByIdPending = () => {
  return {
    type: GET_TICKET_BY_ID_PENDING
  }
};

export const getTicketByIdError = (error) => {
  return {
    type: GET_TICKET_BY_ID_ERROR,
    payload: error
  }
};

export const getTicketByIdSuccess = (data) => {
  return {
    type: GET_TICKET_BY_ID_SUCCESS,
    payload: data
  }
};

export const addTicketPending = () => {
  return {
    type: ADD_TICKET_PENDING
  }
};

export const addTicketError = (error) => {
  return {
    type: ADD_TICKET_ERROR,
    payload: error
  }
};

export const addTicketSuccess = () => {
  return {
    type: ADD_TICKET_SUCCESS
  }
};

export const delTicketPending = () => {
  return {
    type: DEL_TICKET_PENDING
  }
};

export const delTicketError = (error) => {
  return {
    type: DEL_TICKET_ERROR,
    payload: error
  }
};

export const delTicketSuccess = () => {
  return {
    type: DEL_TICKET_SUCCESS
  }
};

export const putTicketPending = () => {
  return {
    type: PUT_TICKET_PENDING
  }
};

export const putTicketError = (error) => {
  return {
    type: PUT_TICKET_ERROR,
    payload: error
  }
};

export const putTicketSuccess = () => {
  return {
    type: PUT_TICKET_SUCCESS
  }
};

export const upTicketPending = () => {
  return {
    type: UP_TICKET_PENDING
  }
};

export const upTicketError = (error) => {
  return {
    type: UP_TICKET_ERROR,
    payload: error
  }
};

export const upTicketSuccess = () => {
  return {
    type: UP_TICKET_SUCCESS
  }
};

export const downTicketPending = () => {
  return {
    type: DOWN_TICKET_PENDING
  }
};

export const downTicketError = (error) => {
  return {
    type: DOWN_TICKET_ERROR,
    payload: error
  }
};

export const downTicketSuccess = () => {
  return {
    type: DOWN_TICKET_SUCCESS
  }
};
