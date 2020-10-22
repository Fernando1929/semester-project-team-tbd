const db = require("../db/index");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const  authTokens =  {};

const signup = async (req,res) => {
    try {
        const { username, password, email } = req.body.user;
        const duplicated = (await accountExists(username)).valueOf();

        if(!duplicated) {
            const newAccount = await db.query(
                "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",
                [username, password, email]
            );
    
            res.status(201).json(newAccount.rows[0]);
        }
        else {
            res.status(404).json("Username already exists");
        }

    } catch (err) {
        console.log(err);
    }
}

// Sign Up helper function
const accountExists = async (req) => {
    try {
        const username = req;
        console.log(username);
        const account = await db.query("SELECT * FROM account WHERE username = $1", [username]);
        console.log(account.rowCount);
        if(account.rows.length !== 0) {
            return true;
        } else {
            return false; 
        }

    } catch (err) {
        console.log(err);
    }
}

const login = async (req,res) => {//verify this method when is called 
    try{
    const { username, email, password,} = req.body.user;
    const hashedPassword = getHashedPassword(password);
    /////Verify either of this ways 
    const queryreturn = await db.query("SELECT * FROM account where username = $1 OR email = $2",[username, email]); //Verify if User exists***
    const user_exist = queryreturn.rows[0];
    const user = (user_exists) =>{ 
        return (user_exists["username"] === username || user_exists["email"] === email) && user_exists["password"] === password
    };
    ////////////////////
        if(user){
            authToken = generateAuthToken();

            // Store authentication token
            authTokens[authToken] = user;

            // Setting the auth token in cookies
            //res.cookie('AuthToken', authToken);
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
}

const getHashedPassword = (password) => {
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}


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
    deleteAccount,
}