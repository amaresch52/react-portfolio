import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div class="container shadow p-3 mb-5 bg-white rounded" id="contact-me">
        <div class="col-sm-12 col-xs-12 text-center ">
          <br />
          <h1>Like what you see?</h1>
          <h3 id="email-header ">I'd love to connect with you!</h3>
          <br />
          <br />
          <a href="mailto:amaresch52@gmail.com " class="xxlarge">
            {" "}
            <i class="fa fa-envelope fa-4x icon"></i>
            <br />
            <br /> amaresch@gmail.com
          </a>
          <br />
          <br />
          <h3 id="socialmedia-header ">Or, find me online</h3>
          <br />
          <br />
          <div id="myToolTip "></div>
          <ul class="list-unstyled ">
            <li>
              <a
                class="hoverable "
                title="LinkedIn "
                href="https://www.linkedin.com/in/adam-maresch-549816100/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin fa-4x icon"></i>
              </a>
            </li>
            <li>
              <a
                class="hoverable "
                title="GitHub "
                href="https://github.com/amaresch52"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github fa-4x icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container shadow p-3 mb-5 bg-white rounded" id="resume">
        <h1>Résumé</h1>
        <h2>Click below for a copy of my résumé</h2>
        <a
          href="assets/Adam Maresch Resume.pdf"
          type="button"
          class="btn btn-lg btn-secondary repButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam Maresch - Résumé
        </a>

        <div>
          <a
            href="assets/Adam Maresch Resume.pdf"
            download="Adam Maresch Resume"
          >
            <i class="fa fa-save fa-4x icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
