const db = require("../db/index");

const signup = async (req,res) => {
    try {
        const { username, password, email } = req.body.user;
        const newAccount = await db.query(
            "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",
            [username, password, email]
        );

        res.status(201).json(newAccount.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const login = async (req,res) => {}

const getAccountById = async (req,res) => {
    try {
        const account = await db.query("SELECT * FROM account WHERE account_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                account: account.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const updateAccount = async (req,res) => {
    try {
        const {username, password, email} = req.body;
        const result = await db.query(
            "UPDATE account SET username = $1, password = $2, email = $3 WHERE account_id = $4 RETURNING *",
            [username, password, email, req.params.id]
            ); 

        res.status(200).json({
            status: "success",
            data: {
                account: result.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteAccount = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM account WHERE account_id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signup,
    login,
    getAccountById,
    updateAccount,
    deleteAccount
}