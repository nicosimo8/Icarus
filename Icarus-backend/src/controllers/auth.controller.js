import { pool } from '../db.js'

export const authLogin = async (req, res) => {
  try{
    const [rows] = await pool.query("SELECT * FROM megaUser WHERE userName = ?", [req.params.userName]);

    if ([rows] <= 0) {
      const [rows2] = await pool.query("SELECT * FROM userAccount WHERE userName = ?", [req.params.userName]);

      if ([rows2] <= 0) {
        return res.status(404).json({
          message: 'Not found'
        });
      };

      if (rows2[0].pass === req.params.pass) {
        return res.json({
          id: rows2[0].id,
          userName: rows2[0].userName,
          accountType: rows2[0].accountType,
          megaUser_id: rows2[0].megaUser_id
        });
      };

      return res.send('Invalid credentials');
    };
  
    if (rows[0].pass === req.params.pass) {
      return res.json({
        id: rows[0].id,
        userName: rows[0].userName,
        accountType: rows[0].accountType
      });
    };

    return res.send('Invalid credentials');

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
