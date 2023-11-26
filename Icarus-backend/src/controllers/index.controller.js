import { pool } from '../db.js';

export const getRunning = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT "Server Running"');

    res.json(result[0]);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
 
};
