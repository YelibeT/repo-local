import React from "react";

export default function Home() {
  return (
    <div>
      <section id="Home" class="hero">
        <div class="intro">
          <div class="">
            <h1>Abyssinia Restaurant</h1>
        
            <h2>Authentic Taste of Ethiopian Cuisine</h2>
          </div>
        </div>
      </section>
      <section class="services">
        <h3>Chef's Specialities</h3>
        <div class="specials">
          <div class="food">
            <a href="#d-popup" title="click for more details">
              <img src="/images/ድርቆሽፍ.jpg" alt="Dirikosh Firfir"></img>
              <h4>Dirikosh Firfir</h4>
            </a>
            <div class="popup" id="d-popup">
              <div class="popup-window">
                <a href="#" class="close">
                  &times;
                </a>
                <p>Description</p>
                <button id="popup-btn">Order</button>
              </div>
            </div>
          </div>
          <div class="food">
            <a href="#k-popup">
              <img src="/images/ክትፎ.jpg" alt=""></img>
              <h4>Special Kitifo</h4>
            </a>
            <div class="popup" id="k-popup">
              <div class="popup-window">
                <a href="#" class="close">
                  &times;
                </a>
                <p>Description</p>
                <button id="popup-btn">Order</button>
              </div>
            </div>
          </div>
          <div class="food">
            <a href="#a-popup">
              <img src="/images/አዋዜጥብስ.jpeg" alt=""></img>
              <h4>Awaze Tibis</h4>
            </a>
            <div class="popup" id="a-popup">
              <div class="popup-window">
                <a href="#" class="close">
                  &times;
                </a>
                <p>Description</p>
                <button id="popup-btn">Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
