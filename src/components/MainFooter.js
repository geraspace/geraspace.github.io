import React from "react";
import { SocialIcon } from "react-social-icons";
import { CopiarEmail } from "../functions/functions.js";

export default function MainFooter() {
  return (
    <div className="MainFooterDiv">
      <footer className="MainFooter">
        {" "}
        <SocialIcon style={{ height: 40, width: 40, margin:5}}  fgColor="white" url="https://www.instagram.com/_geraspace/"></SocialIcon>{" "}
        <SocialIcon style={{ height: 40, width: 40, margin:5}}  fgColor="white" url="https://www.linkedin.com/in/gearpama/"></SocialIcon>{" "}
        <SocialIcon style={{ height: 40, width: 40, margin:5}}  bgColor="white" fgColor="black" url="https://github.com/geraspace"></SocialIcon>{" "}
        <button className="BotonCopiar" onClick={CopiarEmail} value="gpadilla75@uabc.edu.mx" id="CopyEmail"><SocialIcon network="email" title="Click to copy my email" style={{ height: 40, width: 40, margin:10}} fgColor="white"></SocialIcon>{" "}</button>
        <SocialIcon title="My resume" style={{ height: 40, width: 40, margin:5}} fgColor="white" url="https://www.overleaf.com/read/rdtbrcqfhhpr"></SocialIcon>{" "}
        <SocialIcon title="My very first website" style={{ height: 40, width: 40, margin:5}} fgColor="white" url="https://resumegera.herokuapp.com/"></SocialIcon>{" "}
      </footer>
    </div>
  );
}