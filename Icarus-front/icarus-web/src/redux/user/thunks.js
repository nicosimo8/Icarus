import {
  getUsersPending,
  getUsersError,
  getUsersSuccess,

  getUserByIdPending,
  getUserByIdError,
  getUserByIdSuccess,

  addUserPending,
  addUserError,
  addUserSuccess,

  putUserPending,
  putUserError,
  putUserSuccess,

  delUserPending,
  delUserError,
  delUserSuccess,

  upUserPending,
  upUserError,
  upUserSuccess,

  downUserPending,
  downUserError,
  downUserSuccess
} from './actions';

export const getUsers = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getUsersPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/${id}`, {
        method: 'GET'
      });

      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getUsersSuccess(data));

    } catch (error) {
      dispatch(getUsersError(error));
    }
  }
}

export const getUserById = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(getUserByIdPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/${id}&${megaId}`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getUserByIdSuccess(data));

    } catch (error) {
      dispatch(getUserByIdError(error));
    }
  }
}

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(addUserPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(addUserSuccess());

    } catch (error) {
      dispatch(addUserError(error));
    }
  };
};

export const putUser = (id, megaId, user) => {
  return async (dispatch) => {
    try {
      dispatch(putUserPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/${id}&${megaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: user.userName,
          pass: user.pass,
          fName: user.fName,
          lName: user.lName,
          accountType: user.accountType,
          controlAccess: user.controlAccess,
          createdDate: user.createdDate,
          deletedDate: user.deletedDate,
          isDeleted: user.isDeleted,
          isActive: user.isActive
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(putUserSuccess());

    } catch (error) {
      dispatch(putUserError(error));
    }
  }
}

export const deleteUser = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(delUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/${id}&${megaId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(delUserSuccess());
    } catch (error) {
      dispatch(delUserError(error));
    }
  };
};

export const upUser = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(upUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/up/${id}&${megaId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(upUserSuccess());
    } catch (error) {
      dispatch(upUserError(error));
    }
  };
};

export const downUser = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(downUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/del/${id}&${megaId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(downUserSuccess());
    } catch (error) {
      dispatch(downUserError(error));
    }
  };
};
