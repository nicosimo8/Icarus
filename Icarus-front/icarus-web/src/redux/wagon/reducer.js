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

const initialState = {
  list: [],
  item: {},
  isLoading: false,
  error: ''
};

export const wagonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WAGONS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_WAGONS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_WAGONS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: '',
        isLoading: false
      };
    case GET_WAGON_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_WAGON_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_WAGON_BY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: '',
        isLoading: false
      };
    case ADD_WAGON_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_WAGON_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_WAGON_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case PUT_WAGON_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case PUT_WAGON_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case PUT_WAGON_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DEL_WAGON_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DEL_WAGON_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DEL_WAGON_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case UP_WAGON_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case UP_WAGON_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UP_WAGON_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    case DOWN_WAGON_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case DOWN_WAGON_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case DOWN_WAGON_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false
      };
    default:
      return state;
  }
};
