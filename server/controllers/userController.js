const db = require("../db/index");
const nodemailer = require("nodemailer");
const SMTPTransport = require("nodemailer/lib/smtp-transport");

const addUser = async (req,res) => {
    try {
        const { user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id } = req.body.user;
        const newUser = await db.query(
            "INSERT INTO users (user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, account_id]
        );
        res.status(201).json(newUser.rows[0]);
        emailVerification(newUser.rows[0]['user_id']);
    } catch (err) {
        console.log(err);
    }
}

const emailVerification = async(req) =>{//needs tweaks
    try {
        let transporter = nodemailer.createTransport(new SMTPTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
            user: "Schutzies.synclink@gmail.com",
            pass: "Synclink_appuser", 
            }
        }));
        //Implement with token
        //Test
        const user_id = req;
        const q = await db.query("SELECT * From account NATURAL INNER JOIN users WHERE user_id = $1",[user_id]);
        const email = q.rows[0]['email'];
        const url = `http://localhost:3001/api/confirmation/${user_id}`;//localhost is on port 3001

        const mail = {
            from: "synclink@uprm.com", // sender address
            to: `${email}`, // list of receivers
            subject: "Validate", // Subject line
            text: "Validate your account.", // plain text body
            html: `<b>${url}</b>`, // html body
          };
        console.log("going to send");
        transporter.sendMail(mail, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });   
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
        const user = await db.query("SELECT * FROM users WHERE user_id = $1", [req.params.id]);
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
        const { user_firstname, user_lastname, user_phone, pref_start_work_hour, pref_end_work_hour, user_location } = req.body;
        const result = await db.query(
            "UPDATE users SET user_firstname = $1, user_lastname = $2, user_phone = $3, user_location = $4, pref_start_work_hour = $5, pref_end_work_hour = $6 WHERE user_id = $7 RETURNING *",
            [user_firstname, user_lastname, user_phone, user_location, pref_start_work_hour, pref_end_work_hour, req.params.id]
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
    deleteUser,
    emailVerification
}