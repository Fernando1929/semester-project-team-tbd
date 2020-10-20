require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console

Rapp.get("/login", async (req,res) => {//verify this method when is called 
    //Doing just  the logic of things once here
    // const { username, password, email } = req.body;
    // const user_exists = await db.query("SELECT * FROM account where username = $1 or email = $2",[username, email]);

    // try {
    //     const { username, password, email } = req.body;
    //     const newAccount = await db.query(
    //         "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",
    //         [username, password, email]
    //     );

    //     res.status(201).json(newAccount.rows[0]);
    // } catch (err) {
    //     console.log(err);
    // }
    // console.log("login done")
});


// create an account (sign up)
app.post("/api/signup", async (req,res) => {
    //needs to verify the username if it already exists
    try {
        const { username, password, email } = req.body;
        const newAccount = await db.query(
            "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",
            [username, password, email]
        );

        res.status(201).json(newAccount.rows[0]);
    } catch (err) {
        console.log(err);
    }
});
// app.route("/signup")
//     .post(async (req,res) => {
//         try {
//             const { username, password, user_firstname, user_lastname, user_email, user_phone } = req.body;
//             const newAccount = await db.query(
//                 "INSERT INTO account (username, password) VALUES ($1, $2) RETURNING account_id;",
//                 [username, password]
//             );
//             if (newAccount) {
//                 const newUser = await db.query(
//                     "INSERT INTO users (user_firstname, user_lastname, user_email, user_phone, account_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
//                     [user_firstname, user_lastname, user_email, user_phone, newAccount]
//                 );

//                 res.status(201).json(newUser.rows[0]);
//             }

//         } catch (err) {
//             console.error(err.message);
//         }
//     });

// get all accounts
app.get("/api/accounts", async (req,res) => {
    try {
        const allAccounts = await db.query("SELECT * FROM account");
        res.status(200).json({
            status: "success",
            results: allAccounts.rows.length,
            data: {
                accounts: allAccounts.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
})

// get an account by id
app.get("/api/accounts/:id", async (req,res) => {
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
});

// update an account
app.put("/api/accounts/:id", async (req,res) => {
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
});

// delete an account
app.delete("/api/accounts/:id", async (req,res) => {
    try {
        const result = await db.query("DELETE FROM account WHERE account_id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});