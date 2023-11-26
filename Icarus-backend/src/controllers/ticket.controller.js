import { pool } from '../db.js'

export const getTickets = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM ticket WHERE megaUser_id = ?', [req.params.id]);

    res.json(rows);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const getTicketById = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM ticket WHERE id = ? AND megaUser_id = ?', [req.params.id, req.params.megaId]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: 'Ticket not found'
      });
    }

    res.json(rows[0]);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const putTicket = async (req, res) => {
  try {
    const { id, megaId } = req.params;
    const { createdDate } = req.body;

    const [result] = await pool.query(
      'UPDATE ticket SET createdDate = IFNULL(?, createdDate) WHERE id = ? AND megaUser_id = ?',
      [
        createdDate,
        id,
        megaId
      ]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Ticket not found'
      });
    }

    res.json('User modify success');

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const delTicketPerm = async (req, res) => {
  try{
    const [result] = await pool.query('DELETE FROM ticket WHERE id = ? AND megaUser_id = ?', [req.params.id, req.params.megaId]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.sendStatus(204);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const posTicket = async (req, res) => {
  try {
    const request = req.body;
    const dateNow = new Date();
    const dateToString = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate();

    const [rows] = await pool.query(
      'INSERT INTO ticket(createdDate, megaUser_id, user_id) VALUES (?, ?, ?)', [ dateToString, request?.megaUser_id, request?.user_id ]
    );
  
    res.send({ 
      id: rows.insertId,
      dateToString
     });

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  };
};
