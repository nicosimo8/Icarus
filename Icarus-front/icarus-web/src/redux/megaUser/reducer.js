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

const initialState = {
  list: [],
  item: {},
  isLoading: false,
  error: ''
};

export const megaUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEGAUSERS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEGAUSERS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_MEGAUSERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: '',
        isLoading: false
      };
    case GET_MEGAUSER_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEGAUSER_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_MEGAUSER_BY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: '',
        isLoading: false
      };
    case ADD_MEGAUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_MEGAUSER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_MEGAUSER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case PUT_MEGAUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case PUT_MEGAUSER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PUT_MEGAUSER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DEL_MEGAUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DEL_MEGAUSER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DEL_MEGAUSER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case UP_MEGAUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case UP_MEGAUSER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UP_MEGAUSER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DOWN_MEGAUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DOWN_MEGAUSER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DOWN_MEGAUSER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    default:
      return state;
  }
};
