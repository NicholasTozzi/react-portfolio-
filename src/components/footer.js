import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 footer">
        <div className="col-md-4 d-flex align-items-center social-container">

            <a href="https://twitter.com/SeitanETH">
              <FaTwitter className="icon" />
            </a>
            <a href="https://twitter.com/SeitanETH">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/SeitanETH">
              <FaGithub className="icon" />
            </a>
            <a href="https://opensea.io/SeitanETH">
              <SiOpensea className="icon" />
            </a>
       
        </div>
        <span className="copywrite">© 2023 Company, Inc</span>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
        </ul>
      </footer>
    </div>
  );
}
