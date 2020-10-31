import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "../Components/SyncLinkNavbar";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services";
import UserSchedule from "../Pages/UserSchedule";
import SignUp from "../Pages/SignUp/SignUp";
import ProfileInfo from "../Pages/SignUp/ProfileInfo";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import LogIn from "../Pages/LogIn";
import LoginValidate from "../Pages/LoginValidate";
import Profile from "../Pages/Profile"

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
