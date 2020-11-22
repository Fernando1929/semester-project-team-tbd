import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "../Components/SyncLinkNavbar";
import Home from "../Pages/Home/Home";
import UserSchedule from "../Pages/User/UserSchedule";
import SignUp from "../Pages/SignUp/SignUp";
import ProfileInfo from "../Pages/SignUp/ProfileInfo";
import LogIn from "../Pages/Login/LogIn";
import LoginValidate from "../Pages/Login/LoginValidate";
import Profile from "../Pages/User/Profile";
import Teams from "../Pages/Teams/Teams";
import Auth from "../utils/Auth";
import LoginNavbar from "../Components/LoginNavbar";

function App() {
  return (
    <>
      <Router>
        {Auth.isUserAuthenticated() ? <LoginNavbar /> : <SyncLinkNavbar />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/ProfileInfo" component={ProfileInfo} />
          <Route path="/UserSchedule" component={UserSchedule} />
          <Route path="/LoginValidate" component={LoginValidate} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Teams" component={Teams} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
