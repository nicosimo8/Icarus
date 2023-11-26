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

const initialState = {
  list: [],
  item: {},
  isLoading: false,
  error: ''
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_TICKETS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: '',
        isLoading: false
      };
    case GET_TICKET_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_TICKET_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_TICKET_BY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: '',
        isLoading: false
      };
    case ADD_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case PUT_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case PUT_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PUT_TICKET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DEL_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DEL_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DEL_TICKET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case UP_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case UP_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UP_TICKET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DOWN_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DOWN_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DOWN_TICKET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    default:
      return state;
  }
};
