import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/About">Testimonials</Link>
            <Link to="/About">Careers</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/About">Contact</Link>
            <Link to="/About">Support</Link>
            <a href="https://www.google.com/maps/place/St.ANTHONY'S+FARM/@15.3924292,73.9213898,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfb9a9d99b89cb:0x1280adfbfabaa3ec!8m2!3d15.392424!4d73.9239647!16s%2Fg%2F11tcpzz_r5?entry=ttu">Location</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="https://www.instagram.com/alisonshairandbeautycare/"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.facebook.com/AlisonsSalon/" rel="noreferrer">
              Facebook
            </a>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              St Anthony's Farm
            </Link>
          </div>
          <small class="website-rights">SAF © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
