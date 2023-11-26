import {
  getMegaUsersPending,
  getMegaUsersError,
  getMegaUsersSuccess,

  getMegaUserByIdPending,
  getMegaUserByIdError,
  getMegaUserByIdSuccess,

  addMegaUserPending,
  addMegaUserError,
  addMegaUserSuccess,

  putMegaUserPending,
  putMegaUserError,
  putMegaUserSuccess,

  delMegaUserPending,
  delMegaUserError,
  delMegaUserSuccess,

  upMegaUserPending,
  upMegaUserError,
  upMegaUserSuccess,

  downMegaUserPending,
  downMegaUserError,
  downMegaUserSuccess
} from './actions';

export const getMegaUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(getMegaUsersPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-users`, {
        method: 'GET'
      });

      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getMegaUsersSuccess(data));

    } catch (error) {
      dispatch(getMegaUsersError(error));
    }
  }
}

export const getMegaUserById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getMegaUserByIdPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user/${id}`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getMegaUserByIdSuccess(data.data));

    } catch (error) {
      dispatch(getMegaUserByIdError(error));
    }
  }
}

export const addMegaUser = (megaUser) => {
  return async (dispatch) => {
    try {
      dispatch(addMegaUserPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(megaUser)
      });

      const newMegaUser = await response.json();

      if (newMegaUser.error) {
        throw new Error(newMegaUser.message);
      }
      dispatch(addMegaUserSuccess());

    } catch (error) {
      dispatch(addMegaUserError(error));
    }
  };
};

export const putMegaUser = (id, megaUser) => {
  return async (dispatch) => {
    try {
      dispatch(putMegaUserPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          serialKey: megaUser.serialKey,
          userName: megaUser.userName,
          pass: megaUser.pass,
          fName: megaUser.fName,
          lName: megaUser.lName,
          accountType: 'MUS',
          controlAccess: true,
          createdDate: megaUser.createdDate,
          deletedDate: megaUser.deletedDate,
          isDeleted: megaUser.isDeleted,
          isActive: megaUser.isActive
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(putMegaUserSuccess());

    } catch (error) {
      dispatch(putMegaUserError(error));
    }
  }
}

export const deleteMegaUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(delMegaUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(delMegaUserSuccess());
    } catch (error) {
      dispatch(delMegaUserError(error));
    }
  };
};

export const upMegaUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(upMegaUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user/up/${id}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(upMegaUserSuccess());
    } catch (error) {
      dispatch(upMegaUserError(error));
    }
  };
};

export const downMegaUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(downMegaUserPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mega-user/del/${id}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(downMegaUserSuccess());
    } catch (error) {
      dispatch(downMegaUserError(error));
    }
  };
};
