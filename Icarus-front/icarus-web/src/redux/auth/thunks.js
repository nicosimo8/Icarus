import {
  loginError,
  loginPending,
  loginSuccess,
  logoutError,
  logoutPending,
  logoutSuccess
} from './actions';

export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutPending());
    try {
      sessionStorage.removeItem('uid');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('user');
      dispatch(logoutSuccess());
      return { error: false, message: 'Log Out Successfully' };
    } catch (error) {
      dispatch(logoutError(error));
      return {
        error: true,
        message: error
      };
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login/user=${credentials.userName}&pass=${credentials.pass}`, {
        method: 'GET'
      });
      
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (data) {
        sessionStorage.setItem('user', data?.userName);
        sessionStorage.setItem('role', data?.accountType);
        if (data?.accountType === 'MUS') {
          sessionStorage.setItem('uid', data?.id);
        } else if (data?.accountType === 'USR' || data?.accountType === 'ADM') {
          sessionStorage.setItem('uid', data?.megaUser_id);
          sessionStorage.setItem('id', data?.id);
        };
      }

      return dispatch(loginSuccess(data.data));

    } catch (error) {
      console.log(error);
      return dispatch(loginError(error));
    }
  };
};
