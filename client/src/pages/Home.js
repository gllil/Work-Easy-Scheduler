import React from "react";
import HomeNav from "../components/HomeNav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <HomeNav />
      <div className="container">
        <div className="row">
          <Button>
            <Link to="/adminlogin" className="text-white">
              Login
              </Link>
              </Button>
        </div>
        <div className="row">
          <Button>
              <Link to="/adminregister" className="text-white">
              Register
              </Link>
              </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
