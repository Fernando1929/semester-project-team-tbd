import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "./Components/SyncLinkNavbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LogIn from "./Pages/LogIn";
import LoggedHome from "./Pages/LoggedHome";

function App() {
  var user = {isLogged: true}//testing purposes
  var HomePage = Home
  if(user.isLogged){
    HomePage = LoggedHome
  }
  return (
    <>
      <Router>
        <SyncLinkNavbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Services" component={Services} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
