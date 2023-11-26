import { pool } from '../db.js'

export const getUsers = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM userAccount WHERE megaUser_id = ?', [req.params.id]);

    res.json(rows);

  } catch(error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const getUserById = async (req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM userAccount WHERE id = ? AND megaUser_id = ?', [req.params.id, req.params.megaId]);

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

export const putUser = async (req, res) => {
  try {
    const { id, megaId } = req.params;
    const { userName, pass, fName, lName, accountType, controlAccess, createdDate, deletedDate, isDeleted, isActive } = req.body;

    const [result] = await pool.query(
      'UPDATE userAccount SET userName = IFNULL(?, userName), pass = IFNULL(?, pass), fName = IFNULL(?, fName), lName = IFNULL(?, lName), accountType = IFNULL(?, accountType), controlAccess = IFNULL(?, controlAccess), createdDate = IFNULL(?, createdDate), deletedDate = IFNULL(?, deletedDate), isDeleted = IFNULL(?, isDeleted), isActive = IFNULL(?, isActive) WHERE id = ? AND megaUser_id = ?',
      [
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
        id,
        megaId
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

export const upUser = async (req, res) => {
  try {
    const { id, megaId } = req.params;

    const [result] = await pool.query(
      'UPDATE userAccount SET deletedDate = ?, isDeleted = ?, isActive = ? WHERE id = ? AND megaUser_id = ?',
      [ "", false, true, id, megaId ]
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

export const delUser = async (req, res) => {
  try {
    const { id, megaId } = req.params;
    const dateNow = new Date();
    const dateToString = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate();

    const [result] = await pool.query(
      'UPDATE userAccount SET deletedDate = ?, isDeleted = ?, isActive = ? WHERE id = ? AND megaUser_id = ?',
      [ dateToString, true, false, id, megaId ]
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

export const delUserPerm = async (req, res) => {
  try{
    const [result] = await pool.query('DELETE FROM userAccount WHERE id = ? AND megaUser_id = ?', [req.params.id, req.params.megaId]);

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

export const posUser = async (req, res) => {
  try {
    const request = req.body;
    const dateNow = new Date();
    const dateToString = dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate();
    let controlAccess = false;

    if(request.accountType === 'ADM') {
      controlAccess = true;
    };

    const [rows] = await pool.query(
      'INSERT INTO userAccount(userName, pass, fName, lName, accountType, controlAccess, createdDate, deletedDate, isDeleted, isActive, megaUser_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        request.userName,
        request.pass,
        request.fName,
        request.lName,
        request.accountType,
        controlAccess,
        dateToString,
        "",
        false,
        true,
        request.megaUser_id,
      ]
    );
  
    res.send({ 
      id: rows.insertId,
      userName: request.userName,
      password: request.pass,
      fName: request.fName,
      lName: request.lName,
      accountType: request.accountType,
      controlAccess: controlAccess,
      createdDate: dateToString,
      deletedDate: "",
      isDeleted: false,
      isActive: true
     });

  } catch(error) {
    res.status(500).json({
      message: error.message
    });
  };
};
