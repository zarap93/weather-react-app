import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //let months = [
  // "January",
  //"February",
  //"March",
  //"April",
  //"May",
  //"June",
  //"July",
  //"August",
  //"September",
  //"October",
  //"November",
  //"December",
  //];

  let day = days[props.date.getDay()];
  //let month = months[props.date.getMonth()];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div>
      {day}, {hour}:{minute}
    </div>
  );
}
