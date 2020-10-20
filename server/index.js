const accountRoutes = require('./routes/accountRoutes');

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

// Adding routes to the application
app.use('/api', accountRoutes);

app.get("/login", async (req,res) => {//verify this method when is called 
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});