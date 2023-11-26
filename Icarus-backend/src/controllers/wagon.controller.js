import { pool } from '../db.js'

export const getWagons = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM wagon WHERE ticket_id = ?', [req.params.id]);

    res.json(rows);

  } catch(error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getWagonById = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM wagon WHERE id = ? AND ticket_id = ?', [req.params.id, req.params.tktId]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json(rows[0]);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const putWagon = async (req, res) => {
  try {
    const { id, tktId } = req.params;
    const { wagonNumValue, tareValue, rawValue, netValue, seal } = req.body;

    const queryText1 = "UPDATE wagon SET ";
    const queryText2 = "wagonNumValue = IFNULL(?, wagonNumValue), ";
    const queryText3 = "tareValue = IFNULL(?, tareValue), ";
    const queryText4 = "rawValue = IFNULL(?, rawValue), ";
    const queryText5 = "netValue = IFNULL(?, netValue), ";
    const queryText6 = "seal1 = IFNULL(?, seal1), seal2 = IFNULL(?, seal2), seal3 = IFNULL(?, seal3), seal4 = IFNULL(?, seal4), seal5 = IFNULL(?, seal5), seal6 = IFNULL(?, seal6), ";
    const queryText7 = "seal7 = IFNULL(?, seal7), seal8 = IFNULL(?, seal8), seal9 = IFNULL(?, seal9), seal10 = IFNULL(?, seal10), seal11 = IFNULL(?, seal11), seal12 = IFNULL(?, seal12) ";
    const queryText8 = "WHERE id = ? AND ticket_id = ?";

    const queryString = queryText1 + queryText2 + queryText3 + queryText4 + queryText5 + queryText6 + queryText7 + queryText8

    const [result] = await pool.query(
      queryString,
      [
        wagonNumValue,
        tareValue,
        rawValue,
        netValue,
        seal.seal1,
        seal.seal2,
        seal.seal3,
        seal.seal4,
        seal.seal5,
        seal.seal6,
        seal.seal7,
        seal.seal8,
        seal.seal9,
        seal.seal10,
        seal.seal11,
        seal.seal12,
        id,
        tktId
      ]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json('User modify success');

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const delWagonPerm = async (req, res) => {
  try{
    const [result] = await pool.query('DELETE FROM wagon WHERE id = ? AND ticket_id = ?', [req.params.id, req.params.tktId]);

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

export const posWagon = async (req, res) => {
  try {
    const { wagonNumValue, tareValue, rawValue, netValue, seal, ticket_id } = req.body;

    const [rows] = await pool.query(
      'INSERT INTO wagon(wagonNumValue, tareValue, rawValue, netValue, seal1, seal2, seal3, seal4, seal5, seal6, seal7, seal8, seal9, seal10, seal11, seal12, ticket_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        wagonNumValue,
        tareValue,
        rawValue,
        netValue,
        seal.seal1,
        seal.seal2,
        seal.seal3,
        seal.seal4,
        seal.seal5,
        seal.seal6,
        seal.seal7,
        seal.seal8,
        seal.seal9,
        seal.seal10,
        seal.seal11,
        seal.seal12,
        ticket_id
      ]
    );
  
    res.send({ 
      id: rows.insertId,
      wagonNumValue,
      tareValue,
      rawValue,
      netValue,
      seal
     });

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  };
};
