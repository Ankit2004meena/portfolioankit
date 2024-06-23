import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Bio } from "./data/constants";

export const ResumeButton1 = styled.button`
    text-align: center;
    width:8rem;
    padding: 10px 10px;
    border-radius: 20px;
    cursor: pointer;
  transform:none;
  transition:none;
font-weight:600;
    background-image: linear-gradient(135deg, #F53803 10%, #F5D020 100%);
    &:hover {
      background-image: linear-gradient(135deg, #FFA8A8 10%, #FCFF00 100%);;
    }    
`;
function Navbar() {
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const handleLeetcodeClick = () => {
    window.location.href = Bio.Leetcode;
  };

  const handleGitHubClick = () => {
    window.location.href = Bio.github;
  };
  return (
    <nav className="nav">
      <a href="#home" className="nav__brand">
      Ankit Meena
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
           Project
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
        <ResumeButton1 onClick={handleLeetcodeClick}>Leetcode</ResumeButton1>
        </li>
        <li className="nav__item">
        <ResumeButton1 onClick={handleGitHubClick}>GitHub</ResumeButton1>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;