import React from "react";
import portrait from "../images/IMG_0239.JPG";
import "../styles/Header.css";

export default function Header() {
  return (
    <header class="display-container content center">
      <img class="imageMe" src={portrait} alt="Pic of Me" />

      <div class="display-middle padding-large text-light-grey center container top rounded">
        <h1 class="xxxlarge" id="firstName">
          Adam Maresch
        </h1>
        <h3 class="">FULL STACK DEVELOPER</h3>
      </div>
    </header>
  );
}
