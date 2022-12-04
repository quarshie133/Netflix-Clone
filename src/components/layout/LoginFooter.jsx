import React from "react";
import "../styles/LoginFooter.css";
import styled from "styled-components";

function LoginFooter() {
  return (
    <footer className="footer">
      <div className="container drop
      ">
        <div className="row">
          <p>
            <a href="#">Questions? Contact us.</a>
          </p>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LoginFooter;
