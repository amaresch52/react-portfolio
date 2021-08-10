import React from "react";
import "../styles/Nav.css";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-link"
              href="#header"
              alt="About"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </div>
          <div>
            <a
              class="nav-link"
              href="#header"
              alt="Projects"
              onClick={() => handlePageChange("Projects")}
            >
              Projects
            </a>
          </div>
          <div>
            <a
              class="nav-link"
              href="#header"
              alt="Contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
