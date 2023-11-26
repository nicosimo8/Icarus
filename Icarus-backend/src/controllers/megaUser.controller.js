import { pool } from '../db.js'

export const getMegaUsers = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM megaUser');

    res.json(rows);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const getMegaUserById = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM megaUser WHERE id = ?', [req.params.id]);

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

export const putMegaUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { serialKey, userName, pass, fName, lName, accountType, controlAccess, createdDate, deletedDate, isDeleted, isActive } = req.body;

    const [result] = await pool.query(
      'UPDATE megaUser SET serialKey = IFNULL(?, serialKey), userName = IFNULL(?, userName), pass = IFNULL(?, pass), fName = IFNULL(?, fName), lName = IFNULL(?, lName), accountType = IFNULL(?, accountType), controlAccess = IFNULL(?, controlAccess), createdDate = IFNULL(?, createdDate), deletedDate = IFNULL(?, deletedDate), isDeleted = IFNULL(?, isDeleted), isActive = IFNULL(?, isActive) WHERE id = ?',
      [
        serialKey,
        userName,
        pass,
        fName,
        lName,
        accountType,
        controlAccess,
        createdDate,
        deletedDate,
        isDeleted,
        isActive,
        id
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

export const upMegaUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      'UPDATE megaUser SET deletedDate = ?, isDeleted = ?, isActive = ? WHERE id = ?',
      [ "", false, true, id ]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json('User upset success');

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const delMegaUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dateNow = new Date();
    const dateToString = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate();

    const [result] = await pool.query(
      'UPDATE megaUser SET deletedDate = ?, isDeleted = ?, isActive = ? WHERE id = ?',
      [ dateToString, true, false, id ]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json('User delete success');

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const delMegaUserPerm = async (req, res) => {
  try{
    const [result] = await pool.query('DELETE FROM megaUser WHERE id = ?', [req.params.id]);

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

export const posMegaUser = async (req, res) => {
  try {
    const request = req.body;
    const dateNow = new Date();
    const dateToString = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate();

    const [rows] = await pool.query(
      'INSERT INTO megaUser(serialKey, userName, pass, fName, lName, accountType, controlAccess, createdDate, deletedDate, isDeleted, isActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        request.serialKey,
        request.userName,
        request.pass,
        request.fName,
        request.lName,
        "MUS",
        true,
        dateToString,
        "",
        false,
        true
      ]
    );
  
    res.send({ 
      id: rows.insertId,
      serialKey: request.serialKey,
      userName: request.userName,
      pass: request.pass,
      fName: request.fName,
      lName: request.lName,
      accountType: request.accountType,
      controlAccess: true,
      createdDate: dateToString,
      deletedDate: "",
      isDeleted: false,
      isActive: true
     });

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  };
};
