import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "../Components/SyncLinkNavbar";
import Home from "../Pages/Home/Home";
import Services from "../Pages/AboutUs/Services";
import UserSchedule from "../Pages/User/UserSchedule";
import SignUp from "../Pages/SignUp/SignUp";
import ProfileInfo from "../Pages/SignUp/ProfileInfo";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/AboutUs/ContactUs";
import LogIn from "../Pages/Login/LogIn";
import LoginValidate from "../Pages/Login/LoginValidate";
import Profile from "../Pages/User/Profile";
import Teams from "../Pages/Teams/Teams";

function App() {
  return (
    <>
      <Router>
        <SyncLinkNavbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Services" component={Services} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/ProfileInfo" component={ProfileInfo} />
          <Route path="/UserSchedule" component={UserSchedule} />
          <Route path="/LoginValidate" component={LoginValidate}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Teams" component={Teams}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
