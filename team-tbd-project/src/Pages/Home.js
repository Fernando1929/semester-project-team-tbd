import React from "react";
import "../../src/App.css";
import "./Home.css";
import backgroundH from "../Images/HomeBackground.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      class="bk_Img"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <ol className="homeButtons">
        <Link to="/LogIn" style={{ textDecoration: "none", color: "white" }}>
          <li>
            <Button className="btn--secondary" variant="primary">
              LOG IN
            </Button>
          </li>
        </Link>
        <Link to="/SignUp" style={{ textDecoration: "none", color: "white" }}>
          <li>
            <Button className="btn--secondary" variant="primary">
              SIGN UP
            </Button>
          </li>
        </Link>
        <Link
          to="/ContactUs"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>
            <Button className="btn--secondary" variant="primary">
              HELP
            </Button>
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default Home;
