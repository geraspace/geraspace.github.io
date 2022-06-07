import React from "react";
import { SocialIcon } from "react-social-icons";
import { CopiarEmail } from "../functions/functions.js";

export default function MainFooter() {
  return (
    <div className="MainFooterDiv">
      <footer className="MainFooter">
        {" "}
        <SocialIcon style={{ height: 50, width: 50, margin:10}}  fgColor="white" url="https://www.instagram.com/_geraspace/"></SocialIcon>{" "}
        <SocialIcon style={{ height: 50, width: 50, margin:10}}  fgColor="white" url="https://www.linkedin.com/in/gearpama/"></SocialIcon>{" "}
        <SocialIcon style={{ height: 50, width: 50, margin:10}}  bgColor="white" fgColor="black" url="https://github.com/geraspace"></SocialIcon>{" "}
        <button className="BotonCopiar" onClick={CopiarEmail} value="gpadilla75@uabc.edu.mx" id="CopyEmail"><SocialIcon network="email" title="Da click para copiar mi email" style={{ height: 50, width: 50, margin:10}} fgColor="white"></SocialIcon>{" "}</button>
        <SocialIcon title="My resume" style={{ height: 50, width: 50, margin:10}} fgColor="white" url="https://www.overleaf.com/read/rdtbrcqfhhpr"></SocialIcon>{" "}
      </footer>
    </div>
  );
}