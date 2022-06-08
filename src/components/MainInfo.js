import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";

export default function MainInfo() {
  return (
    <div className="MainInfoDiv">
      <img className="MainInfo-ProfilePicture" src={ProfilePicture} alt="ProfilePicture" />
      <br/>
      <h1 className="MainInfo-MainName">Gerardo Padilla</h1>
      <h2 className="MainInfo-Title">Aspiring front-end developer</h2>
    </div>
  );
}
