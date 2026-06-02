import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <img 
              src="https://raw.githubusercontent.com/PafkoRoki/Lagoon/main/public/favicon.svg" 
              alt="Untitled UI logo" 
              className="logo-icon" 
            />
          </div>
        </div>

        <div className="footer-columns">

          <div className="footer-col">
            <h4>C O N T .</h4>
            <ul>
            <li>
              <a href="tel:+48790820114" aria-label="Call me" className="footer-link">790 820 114</a>
            </li>
            <li>
              <a href="mailto:eranpro@wp.pl" aria-label="Email me" className="footer-link">eranpro@wp.pl</a>
            </li>
            </ul>
          </div>    




        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ANdrzej Kurka</p>
        <div className="social-icons">
    <a href=" x " aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/instagram.svg" alt="Instagram" />
    </a>
    <a href=" x " aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/facebook.svg" alt="Facebook" />
    </a>
    <a href=" x " aria-label="GitHub" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/github.svg" alt="Github" />
    </a>
    <a href=" x " aria-label="Behance" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/behance.svg" alt="Behance" />
    </a>
        </div>
      </div>
    </footer>
  );
}
