import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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
import TeamProfile from "../Pages/Teams/TeamProfile";

function App() {
  return (
    <>
      <Router>
        {Auth.isUserAuthenticated() ? <LoginNavbar /> : <SyncLinkNavbar />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignUp" render={() => Auth.isUserAuthenticated() ?
           <Redirect to="/"/>: <SignUp/> }/>
          <Route path="/LogIn" render={() => Auth.isUserAuthenticated() ?
           <Redirect to="/"/>: <LogIn/> }/>
          <Route path="/ProfileInfo" render={() => Auth.getUserid() !== null ?
           <ProfileInfo/> : <Redirect to="SignUp"/> } />
          <Route path="/UserSchedule/:date" render={(props) => Auth.isUserAuthenticated() ?
           <UserSchedule {...props}/> : <Redirect to="LogIn"/> }  />
          <Route path="/LoginValidate" component={LoginValidate} />
          <Route path="/Profile" render={() => Auth.isUserAuthenticated() ?
           <Profile/> : <Redirect to="LogIn"/> } />
          <Route path="/Teams" render={() => Auth.isUserAuthenticated() ?
           <Teams/> : <Redirect to="LogIn"/>}/>
          <Route path="/TeamProfile/:teamid" render={(props) => Auth.isUserAuthenticated() ?
           <TeamProfile {...props}/> : <Redirect to="LogIn"/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
