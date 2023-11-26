import {
  getWagonsPending,
  getWagonsError,
  getWagonsSuccess,

  getWagonByIdPending,
  getWagonByIdError,
  getWagonByIdSuccess,

  addWagonPending,
  addWagonError,
  addWagonSuccess,

  putWagonPending,
  putWagonError,
  putWagonSuccess,

  delWagonPending,
  delWagonError,
  delWagonSuccess,

  upWagonPending,
  upWagonError,
  upWagonSuccess,

  downWagonPending,
  downWagonError,
  downWagonSuccess
} from './actions';

export const getWagons = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getWagonsPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagons/${id}`, {
        method: 'GET'
      });

      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getWagonsSuccess(data));

    } catch (error) {
      dispatch(getWagonsError(error));
    }
  }
}

export const getWagonById = (id, tktId) => {
  return async (dispatch) => {
    try {
      dispatch(getWagonByIdPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon/${id}&${tktId}`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getWagonByIdSuccess(data.data));

    } catch (error) {
      dispatch(getWagonByIdError(error));
    }
  }
}

export const addWagon = (wagon) => {
  return async (dispatch) => {
    try {
      dispatch(addWagonPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wagon)
      });

      const newWagon = await response.json();

      if (newWagon.error) {
        throw new Error(newWagon.message);
      }

      dispatch(addWagonSuccess());

    } catch (error) {
      dispatch(addWagonError(error));
    }
  };
};

export const putWagon = (id, tktId, wagon) => {
  return async (dispatch) => {
    try {
      dispatch(putWagonPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon/${id}&${tktId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          wagonNumValue: wagon.wagonNumValue,
          tareValue: wagon.tareValue,
          rawValue: wagon.rawValue,
          netValue: wagon.netValue,
          seal1: wagon.seals.seal1,
          seal2: wagon.seals.seal2,
          seal3: wagon.seals.seal3,
          seal4: wagon.seals.seal4,
          seal5: wagon.seals.seal5,
          seal6: wagon.seals.seal6,
          seal7: wagon.seals.seal7,
          seal8: wagon.seals.seal8,
          seal9: wagon.seals.seal9,
          seal10: wagon.seals.seal10,
          seal11: wagon.seals.seal11,
          seal12: wagon.seals.seal12
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(putWagonSuccess());

    } catch (error) {
      dispatch(putWagonError(error));
    }
  }
}

export const deleteWagon = (id, tktId) => {
  return async (dispatch) => {
    try {
      dispatch(delWagonPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon/${id}&${tktId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(delWagonSuccess());
    } catch (error) {
      dispatch(delWagonError(error));
    }
  };
};

export const upWagon = (id, tktId) => {
  return async (dispatch) => {
    try {
      dispatch(upWagonPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon/up/${id}&${tktId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(upWagonSuccess());
    } catch (error) {
      dispatch(upWagonError(error));
    }
  };
};

export const downWagon = (id, tktId) => {
  return async (dispatch) => {
    try {
      dispatch(downWagonPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/wagon/del/${id}&${tktId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(downWagonSuccess());
    } catch (error) {
      dispatch(downWagonError(error));
    }
  };
};
