import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div>
        <figure id="resume">
          <a
            href="../images/Adam Maresch Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-save fa-4x icon"></i>
            <p>Resume</p>
          </a>
        </figure>
        <figure id="linkedin">
          <a
            href="https://www.linkedin.com/in/adam-maresch-j52/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin fa-4x icon"></i>
            <p>Linkedin</p>
          </a>
        </figure>
        <figure id="github">
          <a
            href="https://github.com/amaresch52"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github fa-4x icon"></i>
            <p>GitHub</p>
          </a>
        </figure>
      </div>
    </section>
  );
}
