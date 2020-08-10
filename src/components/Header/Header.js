import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';




function Header() {
  return (
  
<header>
    <nav className="navbar sticky-top navbar-expand-lg">
  <div className="navbar-brand" to=""><img className="my-0 mr-md-auto" src="assets/images/Logo.png" alt="Logo" /></div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="header-link p-3 nav-item nav-link active ml-auto" to="/">home <span className="sr-only">(current)</span></Link>
      <Link className="header-link p-3 nav-item nav-link ml-auto" to="/work">work</Link>
      <Link className="header-link p-3 nav-item nav-link ml-auto" to="/hobby">hobby</Link>
      <Link className="header-link p-3 nav-item nav-link ml-auto" to="/mycv">mycv</Link>
    </div>
  </div>
</nav>
</header>
  );
}

export default Header;


 