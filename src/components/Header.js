import React from "react";
import portrait from "../images/IMG_0239.JPG";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src={portrait} alt="Pic of Me" />

      <div>
        <h1 id="firstName">Adam</h1>
        <h1 id="lastName">Maresch</h1>
      </div>
    </header>
  );
}
