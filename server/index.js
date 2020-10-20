const accountRoutes = require('./routes/accountRoutes');
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});