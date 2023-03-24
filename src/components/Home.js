import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navid">
          <a className="navbar-brand"> AMAZON </a>
          <div className="log"><a onClick={() => {
                  navigate("/login");
                }}>Login</a></div>
           
        </div>
       
      </nav>
      
      <footer className="copyrightfooter">
        <p> Copyright &#169; By AMAZON INDIA </p>
      </footer>
    </>
  );
}

export default Home;