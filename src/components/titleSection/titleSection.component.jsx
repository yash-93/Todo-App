import React, { useState, useEffect } from "react";

import "./titleSection.styles.scss";

const TitleSection = () => {
  // const [date, setDate] = useState("");
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  // const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

  // let tempDate = new Date();
  // useEffect(()=>{
  //   setDate(tempDate.getDate());
  //   setMonth(months[tempDate.getMonth()]);
  //   setDay(days[tempDate.getDay() - 1]);
  //   console.log("aa")
  // }, [date, days]);

  return (
    <div className="title-section">
      <div className="title">
        {/* <label>{ date } {month} <br></br>{ day }</label> */}
        <label>TODO APP</label>
      </div>
    </div>
  );
}

export default TitleSection;