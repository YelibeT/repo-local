import React from "react";

export default function About() {
  return (
    <div>
      <div class="welcome">
        <div class="welcome-img">
          <img src="/images/aboutethiopia.jpg"></img>
        </div>
        <div class="welcome-text">
          <h1>Welcome to Abyssinia Restaurant</h1>
          <p>
            A place where culture meets authenticity. We intend on promoting our
            culture through our food.
          </p>
        </div>
      </div>
      <div class="about">
        <div class="about-text">
          <h1>About Us</h1>
          <p>
            Abyssinia is a restaurant based on Addis Ababa, Ethiopia. The name
            represents our identity, which is the former name of our country.{" "}
          </p>
        </div>
        <div class="about-img">
          <img src="/images/ethio.jpg"></img>
        </div>
      </div>
      <div class="vision">
        <div class="about-img">
          <img src="/images/ethio.jpg"></img>
        </div>
        <div class="Vision-text">
          <h1>Our Vision</h1>
          <p>
            To establish a global image with our exceptional food experience.
          </p>
        </div>
      </div>
    </div>
  );
}
