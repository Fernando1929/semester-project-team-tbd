const accountRoutes = require("./server/routes/accountRoutes");
const userRoutes = require("./server/routes/userRoutes");
const userScheduleRoutes = require("./server/routes/userScheduleRoutes");
const teamScheduleRoutes = require("./server/routes/teamScheduleRoutes");
const teamRoutes = require("./server/routes/teamRoutes");
const serviceRoutes = require("./server/routes/serviceRoutes");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
// const { dirname } = require("path");
const app = express();

// -------------------------------------Start of middleware---------------
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // for logging HTTP requests in console

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "team-tbd-project/build/")));
}
app.use(express.static(path.join(__dirname, "team-tbd-project/build/")));
// -------------------------------------Start of routes---------------
app.use("/api", accountRoutes);
app.use("/api", userRoutes);
app.use("/api", userScheduleRoutes);
app.use("/api", teamScheduleRoutes);
app.use("/api", teamRoutes);
app.use("/api", serviceRoutes);

//IDK what is this btw
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "team-tbd-project/public/index.html"));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
