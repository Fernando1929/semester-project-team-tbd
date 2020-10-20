//import { getHashedPassword, generateAuthToken} from "../server/utils";//
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console

const  authTokens =  {};

const getHashedPassword = (password) => {
    const hash = bcrypt.hashSync('somePassword', bcrypt.genSaltSync(10));
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

// create an account (sign up)
app.post("/api/signup", async (req,res) => {
    try {
        //needs to verify the username if it already exists
        //const user_exists = await db.query("SELECT * FROM account where username = $1 OR email = $2",[username, email]);
        
        const { username, password, email } = req.body.user;
        // const oldAccount = await db.query(
        //     "SELECT * FROM account WHERE username = $1", [username]
        // );
        
        const newAccount = await db.query(
            "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",[username, password, email]);
        res.status(201).json(newAccount.rows[0]);
    } catch (err) {
        console.log(err);
    }
});

app.post("/login", async (req,res) => {//verify this method when is called 
    try{
    const { username, email, password,} = req.body.user;
    const hashedPassword = getHashedPassword(password);
    /////Verify either of this ways 
    const user_exists = await db.query("SELECT * FROM account where username = $1 OR email = $2",[username, email]); //Verify if User exists***
    const user = (user_exists) =>{ 
        return (user_exists["username"] === username || user_exists["email"] === email) && user_exists["password"] === hashedPassword;
    };
    ////////////////////
        if(user){
            authToken = generateAuthToken();

            // Store authentication token
            authTokens[authToken] = user;

            // Setting the auth token in cookies
            res.cookie('AuthToken', authToken);
            //res.redirect("3000/");
            res.status(200).json(authToken);
            return res;
        }
        else{
            console.log("user does not exist")
        }
    }
    catch (err){
       console.log(err);
    }
});

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