import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon className="linkedin" /> <GithubIcon className="github" />{" "}
        <FacebookIcon className="facebook" />
      </div>
      <p> &copy; {new Date().getFullYear()} PizzaPlace.com</p>
    </div>
  );
}

export default Footer;
