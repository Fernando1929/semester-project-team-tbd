const accountRoutes = require('./routes/accountRoutes');
const userRoutes = require('./routes/userRoutes');
const userScheduleRoutes = require('./routes/userScheduleRoutes');
const teamScheduleRoutes = require('./routes/teamScheduleRoutes');
const teamRoutes = require('./routes/teamRoutes');
const teamLeaderRoutes = require("./routes/teamLeaderRoutes");
const teamMemberRoutes = require("./routes/teamMemberRoutes");
const meetingOptionsRoutes = require("./routes/meetingOptionRoutes");
const serviceRoutes =  require('./routes/serviceRoutes');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// -------------------------------------Start of middleware--------------- 
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console
app.use('/uploads', express.static('uploads')); // making uploads folder statically accessible
// -------------------------------------Start of routes--------------- 
app.use('/api', accountRoutes);
app.use('/api', userRoutes);
app.use('/api', userScheduleRoutes);
app.use('/api', teamScheduleRoutes);
app.use('/api', teamRoutes);
app.use('/api', teamLeaderRoutes);
app.use('/api', teamMemberRoutes);
app.use('/api', meetingOptionsRoutes);
app.use('/api', serviceRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});