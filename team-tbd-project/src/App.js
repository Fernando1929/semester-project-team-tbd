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
import axios from 'axios';

function App() {
  const state = {};
  const componentDidMount= () => {
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer '+ localStorage.getItem('token')
    //   }
    // };
    axios.get('account').then(
      res => {
        console.log(res);
           this.setState({
             user: res.data,
           });
      },
      err =>{
        console.log(err);
      }
    );
  };

  // var user = { isLogged: true }; //testing purposes
  // var HomePage = Home;
  // if (user.isLogged) {
  //   HomePage = LoggedHome;
  // }
  return (
    <>
      <Router>
        <SyncLinkNavbar />
        <Switch>
          <Route path="/" exact component={() => <Home user={state.data}/>}/>
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
