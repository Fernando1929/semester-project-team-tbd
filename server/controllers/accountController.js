const db = require("../db/index");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const authTokens =  {};

const signup = async (req,res) => {
    try {
        const { username, password, email } = req.body.user;
        const duplicated = (await accountExists(username)).valueOf();
        const hashedPassword = await getHashedPassword(password);

        if(!duplicated) {
            const newAccount = await db.query(
                "INSERT INTO account (username, password, email) VALUES ($1, $2, $3) RETURNING *",
                [username, hashedPassword, email]
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
        // console.log(username);
        const account = await db.query("SELECT * FROM account WHERE username = $1", [username]);
        // console.log(account.rowCount);
        if(account.rows.length !== 0) {
            return true;
        } else {
            return false; 
        }

    } catch (err) {
        console.log(err);
    }
}

const login = async (req,res) => {
    try{
        const { username, email, password} = req.body.user;
        const queryreturn = await db.query("SELECT * FROM account NATURAL INNER JOIN users WHERE username = $1 OR email = $2",[username, email]);
        const user_exists = queryreturn.rows[0];
        console.log(user_exists);
        const user = (user) =>{ 
            return ((user['username'] === username || user['email'] === email) && bcrypt.compare(password,user['password']) )//add at the end:&& user["account_validation"]=== true
        };

        if(user(user_exists)){
            console.log(user(user_exists));
            authToken = generateAuthToken();
            // Store authentication token
            authTokens[authToken] = user;

            // Setting the auth token in cookies
            res.status(200).json({
                    token:authToken,
                    user_id:user_exists['user_id'],
                    username:user_exists['username']
                });
        }
        else{
            res.status(404).json("Wrong password.");
        }
    }
    catch (err){
       console.log(err);
    }
}
//Hashes the password
const getHashedPassword = (password) => {
    const hash = bcrypt.hash(password, 10);
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
        const result = await db.query("DELETE FROM account WHERE account_id = $1", [req.params.id]);
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