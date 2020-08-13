import React from "react";
import './Footer.css';

const Footer = () => {
  return (

    <div className="page-footer font-small  darken-3">
      <div className="row footer">
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">
            <a href="https://www.facebook.com/DanaDDD" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a href="https://github.com/danadanielaclaudia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a href="https://www.linkedin.com/in/daniela-moisa-8b97a7194/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a href="https://www.instagram.com/danadanielaclaudia/" target="blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-3">© Daniela Moisa <span> {(new Date().getFullYear())}</span>
      </div>
    </div>

  );
}

export default Footer;