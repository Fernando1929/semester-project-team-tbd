import React from "react";
import "../../src/App.css";
import "./Home.css";
import HomeLogged from "../Components/HomeLogged";
import HomeUnLogged from "../Components/HomeUnLogged";
function Home() {
  var user = { isLoggedIn: true };
  return (
    <div>
      {user.isLoggedIn === false ? <HomeUnLogged /> : ""}
      {user.isLoggedIn === true ? <HomeLogged /> : ""}
    </div>
  );
}

export default Home;
