import React from "react";
import "../../App/App.css";
import "./Home.css";
import HomeLogged from "../../Components/HomeComponents/HomeLogged";
import HomeUnLogged from "../../Components/HomeComponents/HomeUnLogged";
import Auth from "../../utils/Auth";
import TeamProfile from "../../Pages/Teams/TeamProfile";

function Home() {
  return (
    <div>
      <TeamProfile />
      {/* {Auth.isUserAuthenticated() ? <HomeLogged /> : <HomeUnLogged />} */}
    </div>
  );
}

export default Home;
