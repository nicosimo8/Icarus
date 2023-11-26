import {
  getTicketsPending,
  getTicketsError,
  getTicketsSuccess,

  getTicketByIdPending,
  getTicketByIdError,
  getTicketByIdSuccess,

  addTicketPending,
  addTicketError,
  addTicketSuccess,

  putTicketPending,
  putTicketError,
  putTicketSuccess,

  delTicketPending,
  delTicketError,
  delTicketSuccess,

  upTicketPending,
  upTicketError,
  upTicketSuccess,

  downTicketPending,
  downTicketError,
  downTicketSuccess
} from './actions';

export const getTickets = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getTicketsPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tickets/${id}`, {
        method: 'GET'
      });

      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getTicketsSuccess(data));

    } catch (error) {
      dispatch(getTicketsError(error));
    }
  }
}

export const getTicketById = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(getTicketByIdPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket/${id}&${megaId}`, {
        method: 'GET'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      dispatch(getTicketByIdSuccess(data.data));

    } catch (error) {
      dispatch(getTicketByIdError(error));
    }
  }
}

export const addTicket = (ticket) => {
  return async (dispatch) => {
    try {
      dispatch(addTicketPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
      });

      const newTicket = await response.json();

      if (newTicket.error) {
        throw new Error(newTicket.message);
      }

      dispatch(addTicketSuccess());

    } catch (error) {
      dispatch(addTicketError(error));
    }
  };
};

export const putTicket = (id, megaId, ticket) => {
  return async (dispatch) => {
    try {
      dispatch(putTicketPending());

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket/${id}&${megaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          createdDate: ticket.createdDate
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(putTicketSuccess());

    } catch (error) {
      dispatch(putTicketError(error));
    }
  }
}

export const deleteTicket = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(delTicketPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket/${id}&${megaId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(delTicketSuccess());
    } catch (error) {
      dispatch(delTicketError(error));
    }
  };
};

export const upTicket = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(upTicketPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket/up/${id}&${megaId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(upTicketSuccess());
    } catch (error) {
      dispatch(upTicketError(error));
    }
  };
};

export const downTicket = (id, megaId) => {
  return async (dispatch) => {
    try {
      dispatch(downTicketPending());
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ticket/del/${id}&${megaId}`, {
        method: 'PUT'
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(downTicketSuccess());
    } catch (error) {
      dispatch(downTicketError(error));
    }
  };
};
