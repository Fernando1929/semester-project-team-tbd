import React from "react";
import "../../src/App.css";
import "./Home.css";
import HomeLogged from "../Components/HomeComponents/HomeLogged";
import HomeUnLogged from "../Components/HomeComponents/HomeUnLogged";
function Home() {
  var user = { isLoggedIn: true };
  return (
    <div>
      {!user.isLoggedIn ? <HomeUnLogged /> : ""}
      {user.isLoggedIn ? <HomeLogged /> : ""}
    </div>
  );
}

export default Home;
