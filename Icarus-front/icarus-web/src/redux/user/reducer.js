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

const initialState = {
  list: [],
  item: {},
  isLoading: false,
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: '',
        isLoading: false
      };
    case GET_USER_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: '',
        isLoading: false
      };
    case ADD_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case PUT_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case PUT_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PUT_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DEL_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DEL_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DEL_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case UP_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case UP_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UP_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DOWN_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DOWN_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DOWN_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    default:
      return state;
  }
};
