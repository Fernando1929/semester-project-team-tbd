const accountRoutes = require('./routes/accountRoutes');
const userRoutes = require('./routes/userRoutes');
const userScheduleRoutes = require('./routes/userScheduleRoutes');
const teamScheduleRoutes = require('./routes/teamScheduleRoutes');
const teamRoutes = require('./routes/teamRoutes');

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const app = express();

// -------------------------------------Start of middleware--------------- 
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console
// -------------------------------------Start of routes--------------- 
app.use('/api', accountRoutes);
app.use('/api', userRoutes);
app.use('/api', userScheduleRoutes);
app.use('/api', teamScheduleRoutes);
app.use('/api', teamRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});