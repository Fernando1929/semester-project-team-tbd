import React from "react";
import "../../App/App.css";
import "./Home.css";
import HomeLogged from "../../Components/HomeComponents/HomeLogged";
import HomeUnLogged from "../../Components/HomeComponents/HomeUnLogged";
import Auth from "../../utils/Auth";

function Home() {
  return (
    <div>{Auth.isUserAuthenticated() ? <HomeLogged /> : <HomeUnLogged />}</div>
  );
}

export default Home;
