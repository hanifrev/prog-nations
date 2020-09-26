import React from "react";
export default function TheNavBar({ props }) {
  return (
    <div className="topnav">
      <a className="active" href="index.html">
        Home
      </a>
      <a href="#About">About</a>
      <a href="#contact">Dates</a>
      <a href="#about">Ticket</a>
    </div>
  );
}
