import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SyncLinkNavbar from "./Components/SyncLinkNavbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LogIn from "./Pages/LogIn";
import Auth from "./Pages/Auth";
function Header() { //Used for testing

//     handleLogout = async (e) => {
//         Auth.deauthenticateUser();
//         this.props.history.push('/');
//     }

//     reload = async (e) => {
//         this.props.history.push("/dash");
//         window.location.reload();
//     }


//  return ({Auth.isUserAuthenticated() ? <div className="Services">Services Page</div>:<div className="AboutUs">About UsPage</div> });

}

export default withRouter(Header);
