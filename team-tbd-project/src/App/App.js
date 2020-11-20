import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import Auth from "../utils/Auth";
import LoginNavbar from "../Components/LoginNavbar";
import TeamProfile from "../Pages/Teams/TeamProfile";

function App() {
  return (
    <>
      <Router>
        {Auth.isUserAuthenticated() ? <LoginNavbar /> : <SyncLinkNavbar />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/SignUp" render={() => Auth.isUserAuthenticated() ?
           <Redirect to="/"/>: <SignUp/> }/>
          <Route path="/LogIn" render={() => Auth.isUserAuthenticated() ?
           <Redirect to="/"/>: <LogIn/> }/>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/ProfileInfo" render={() => Auth.getUserid() !== null ?
           <ProfileInfo/> : <Redirect to="SignUp"/> } />
          <Route path="/UserSchedule" render={() => Auth.isUserAuthenticated() ?
           <UserSchedule/> : <Redirect to="LogIn"/> }  />
          <Route path="/LoginValidate" component={LoginValidate} />
          <Route path="/Profile" render={() => Auth.isUserAuthenticated() ?
           <Profile/> : <Redirect to="LogIn"/> } />
          <Route path="/Teams" render={() => Auth.isUserAuthenticated() ?
           <Teams/> : <Redirect to="LogIn"/>}/>
          <Route path="/TeamProfile" render={() => Auth.isUserAuthenticated() ?
           <TeamProfile/> : <Redirect to="LogIn"/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
