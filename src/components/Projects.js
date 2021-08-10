import React from "react";

import ever24 from "../images/Ever24screenshot.png";
import password from "../images/passwordgenerator.png";
import currency from "../images/currencyexchangetool.jpg";
import scheduler from "../images/workdayscheduler.PNG";

export default function Projects() {
  return (
    <div
      class="container main-cont shadow p-3 mb-5 bg-white rounded"
      id="projects"
    >
      <h2>Projects</h2>
      <div class="row news-row">
        <div
          class="
            container-fluid 
            col-md-12 col-sm-6
            justify-content-center
            news-block
          "
        >
          <div class="card-group">
            <div class="underlay">
              <div class="card">
                <img
                  class="card-img-top img"
                  src={ever24}
                  style={{ width: 340, height: 250 }}
                  alt="ever24 app"
                />
                <div class="card-block">
                  <h5 class="card-title">
                    Ever24
                    <hr />
                  </h5>
                  <p class="card-text hide">
                    Our Ever24 app is a medical app solution for instant
                    connection and communications for families. The Ever24
                    platform is an All-In-One medical application portal. With
                    our design, you can input and track all your family member's
                    information into user profiles.{" "}
                  </p>
                  <br />
                  <ul className="list-unstyled card-text">
                    <li>
                      <a
                        href="https://github.com/bergannation/KU_BootCamp_Project2"
                        title="GitHub"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github fa-3x icon"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ever24.herokuapp.com/"
                        title="Deployed Project"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-link fa-3x icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="underlay">
              <div class="card">
                <img
                  class="card-img-top img"
                  src={password}
                  style={{ width: 340, height: 250 }}
                  alt="password generator"
                />
                <div class="card-block">
                  <h5 class="card-title">
                    Password Generator
                    <hr />
                  </h5>
                  <p class="card-text">
                    A project to utilize Javascript to generate a random
                    password where users can dictate what characters they would
                    prefer in the password.
                  </p>
                  <br />
                  <ul class="list-unstyled card-text">
                    <li>
                      <a
                        href="https://github.com/amaresch52/PasswordGenerator"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github fa-3x icon"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://amaresch52.github.io/PasswordGenerator/"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-link fa-3x icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="underlay">
              <div class="card">
                <img
                  class="card-img-top img"
                  src={currency}
                  style={{ width: 340, height: 250 }}
                  alt="currency exchange tool"
                />
                <div class="card-block">
                  <h5 class="card-title">
                    Currency Exchange Tool
                    <hr />
                  </h5>
                  <p class="card-text">
                    This application assists users in understanding how much
                    their currency is worth in a foreign currency, while
                    providing a history of the particular currency and any
                    related news in regard to its exchange.
                  </p>
                  <br />
                  <ul class="list-unstyled card-text">
                    <li>
                      <a
                        href="https://github.com/amaresch52/Project-1-Currency-Exchange"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github fa-3x icon"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://amaresch52.github.io/Project-1-Currency-Exchange/"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-link fa-3x icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="underlay">
              <div class="card">
                <img
                  class="card-img-top img"
                  src={scheduler}
                  style={{ width: 340, height: 250 }}
                  alt="work scheduler"
                />
                <div class="card-block">
                  <h5 class="card-title">
                    Work Scheduler
                    <hr />
                  </h5>
                  <p class="card-text">
                    A 9-5 hourly scheduler to input and save activities per
                    hour. Current hour will be red, previous hours will be grey,
                    and future hours will be green. All entries are saved until
                    the clear schedule button is pressed.
                  </p>
                  <br />
                  <ul class="list-unstyled card-text">
                    <li>
                      <a
                        href="https://github.com/amaresch52/homework5-work_schedule"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github fa-3x icon"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://amaresch52.github.io/homework5-work_schedule/"
                        class="hoverable"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-link fa-3x icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
