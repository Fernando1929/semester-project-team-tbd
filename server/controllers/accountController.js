const db = require("../db/index");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwtGenerator = require("../services/jwtGenerator");
const authTokens = {};

const signup = async (req, res) => {
  try {
    const { username, password, email } = req.body.user;
    const duplicated = (await accountExists(username)).valueOf();
    const hashedPassword = await getHashedPassword(password);

    if (!duplicated) {
      const newAccount = await db.query(
        "INSERT INTO account (username, password, email, account_validation) VALUES ($1, $2, $3, $4) RETURNING *",
        [username, hashedPassword, email, 0]
      );

      //jwt setup
      const token = jwtGenerator(newAccount.rows[0].account_id);
      res.status(201).json(token);
    } else {
      res.status(404).json("Username already exists");
    }
  } catch (err) {
    console.log(err);
  }
};

// Sign Up helper function
const accountExists = async (req) => {
  try {
    const username = req;
    const account = await db.query(
      "SELECT * FROM account WHERE username = $1",
      [username]
    );
    if (account.rows.length !== 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body.user;
  
    // const user = await db.query(
    //   "SELECT * FROM account NATURAL INNER JOIN users WHERE username = $1 OR email = $2",
    //   [username, username]
    // );

    const user = await db.query(
      "SELECT * FROM account WHERE username = $1 OR email = $2",
      [username, username]
    );
      console.log(user);
    if(user.rows.length === 0){
      return res.status(404).json("User does not exist");
    }
    const isvalidPassword = await bcrypt.compareSync(password, user.rows[0]["password"]);
    
    if(!isvalidPassword){
      return res.status(401).json("Wrong password.");
    }

    const token = jwtGenerator(user.rows[0].account_id);

    res.status(200).json({token});
  } catch (err) {
    console.log(err);
  }
};
//Hashes the password
const getHashedPassword = (password) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString("hex");
};

const getAccountById = async (req, res) => {
  try {
    const account = await db.query(
      "SELECT * FROM account WHERE account_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        account: account.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const validateAccount = async (req, res) => {
  try {
    const result = await db.query(
      "UPDATE account SET account_validation = $1 WHERE account_id = $2 RETURNING *",
      [1, req]
    );

    res.status(200);
    res.redirect("http://localhost:3000/LogIn");
  } catch (err) {
    console.log(err);
  }
};

const updateAccount = async (req, res) => {
  try {
    const { username, password, email } = req.body.account;
    const result = await db.query(
      "UPDATE account SET username = $1, password = $2, email = $3 WHERE account_id = $4 RETURNING *",
      [username, password, email, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        account: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const updateEmail = async (req, res) => {
  try {
    const { email } = req.body.account;
    const result = await db.query(
      "UPDATE account SET email = $1 WHERE account_id = $2 RETURNING *",
      [email, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        account: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAccount = async (req, res) => {
  try {
    const result = await db.query("DELETE FROM account WHERE account_id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup,
  login,
  getAccountById,
  updateAccount,
  updateEmail,
  deleteAccount,
  validateAccount,
};
