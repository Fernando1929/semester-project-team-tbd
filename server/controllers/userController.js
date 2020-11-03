const db = require("../db/index");
const emailServices = require("../services/EmailServices");

const addUser = async (req,res) => {
    try {
        const { user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id } = req.body.user;
        const newUser = await db.query(
            "INSERT INTO users (user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id]
        );
        res.status(201).json(newUser.rows[0]);
        emailServices.emailVerification(account_id); 
    } catch (err) {
        console.log(err);
    }
}

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await db.query("SELECT * FROM users");
        res.status(200).json({
            status: "success",
            results: allUsers.rows.length,
            data: {
                users: allUsers.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getUserById = async (req,res) => {
    try {
        const user = await db.query("SELECT * FROM account NATURAL INNER JOIN users WHERE user_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                user: user.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

// add search gets

const updateUser = async (req,res) => {
    try {
        const { user_firstname, user_lastname, user_phone, user_location, user_bio, pref_start_work_hour, pref_end_work_hour } = req.body.profile;
        const result = await db.query(
            "UPDATE users SET user_firstname = $1, user_lastname = $2, user_phone = $3, user_location = $4, user_bio = $5, pref_start_work_hour = $6, pref_end_work_hour = $7 WHERE user_id = $8 RETURNING *",
            [user_firstname, user_lastname, user_phone, user_location, user_bio, pref_start_work_hour, pref_end_work_hour, req.params.id]
        ); 

        res.status(200).json({
            status: "success",
            data: {
                user: result.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM user_schedule WHERE user_id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}