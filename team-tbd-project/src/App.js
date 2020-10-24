import React, { Profiler } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "./Components/SyncLinkNavbar";
import LoginNavbar from "./Components/LoginNavbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LogIn from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

function App() {
var user = {isLoggedIn: true}

const handleClick = () => {user.isLoggedIn = !user.isLoggedIn}

  return (
    <>
      <Router>

        {user.isLoggedIn ? <LoginNavbar /> : <SyncLinkNavbar />}
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Settings" component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
