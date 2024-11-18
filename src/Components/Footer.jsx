import React from 'react';

function Footer() {
  return (
    <footer className="footer-gradient text-white pt-4">
      <div className="container">
        <div className="row">
        
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              Samsung is a global leader in technology, offering innovative products and services
              to enhance your life.
            </p>
          </div>

         
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Support
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

         
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Email: bichu@gmail.com</p>
            <p>Phone: 1234567890</p>
            <p>Address: calicut, India</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Samsung. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
