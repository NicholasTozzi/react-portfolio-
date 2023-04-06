import React from "react";
//TODO: Make nav go to different components of the webpage
export default function nav() {
  return (
    <div class="navbar">
      <div class="navbar-inverse">
        <a class="brand" href="#">
          Title
        </a>
        <ul class="nav">
          <li class="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
