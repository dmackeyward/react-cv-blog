import React from 'react';
import classes from './Footer.module.css';
import icon from "../assets/icon.jpg"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <a href="/"><img className={classes.logo} src={icon} alt="Tennis Racquet Navbar Logo"></img></a>
        <ul className={classes.socialLinks}>
          <li><a href="https://github.com/dmackeyward?tab=repositories">Github</a></li>
          <li><a href="https://www.linkedin.com/in/david-mackey-ward/">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
