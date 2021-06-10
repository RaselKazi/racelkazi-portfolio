import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <div className="bar mb-3"></div>
            <p>
            I have experience with advanced latest technologies and I try to use suitable ones in our client projects
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <div className="bar mb-3"></div>
            <ul className="footer-link">
              <li>
                <Link to="banner" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" className="nav-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="nav-link">
                Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-md-4">
            <h5>Follow US</h5>
            <div className="bar mb-3"></div>

            <div className="f-icon">
            <a
                target="_blank"
                href="https://www.facebook.com/freelancer.raselkazi"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/">
                <i className="fab fa-linkedin-in"> </i>
              </a>
              <a
                target="_blank"
                href="https://github.com/RaselKazi"
              >
                <i className="fab fa-github"> </i>
              </a>
              <a
                target="_blank"
                href="https://medium.com/@raselkazi080"
              >
                <i className="fab fa-medium-m"> </i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
              >
                <i className="fab fa-whatsapp"> </i>
              </a>
            </div>
          </div>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
