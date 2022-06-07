import React from "react";

export default function MainHeader() {

  let date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12){
    timeOfDay = "morning"
  }else if (hours > 12 && hours < 17){
    timeOfDay = "afternoon"
  }else if (hours > 17 && hours < 20){
    timeOfDay = "evening"
  }else{
    timeOfDay = "night"
  }

  return (
    <div className="MainHeaderDiv">
        <header className="MainHeader">
            Hey! Good {timeOfDay}. Welcome to my small website!
        </header>
    </div>
  );
}