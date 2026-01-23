import React, { useState } from "react";

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);

  const specials = [
    {
      id: 1,
      name: "Dirikosh Firfir",
      image: "/images/ድርቆሽፍ.jpg",
      description: "Traditional Ethiopian firfir made from dried injera."
    },
    {
      id: 2,
      name: "Special Kitifo",
      image: "/images/ክትፎ.jpg",
      description: "Finely minced raw beef seasoned with spices and butter."
    },
    {
      id: 3,
      name: "Awaze Tibis",
      image: "/images/አዋዜጥብስ.jpeg",
      description: "Sautéed beef cubes cooked with awaze sauce."
    }
  ];

  return (
    <div>
      {/* HERO */}
      <section id="Home" className="hero">
        <div className="intro">
          <h1>Abyssinia Restaurant</h1>
          <h2>Authentic Taste of Ethiopian Cuisine</h2>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="services">
        <h3>Chef's Specialities</h3>

        <div className="specials">
          {specials.map((item) => (
            <div
              key={item.id}
              className="food"
              onClick={() => setActiveItem(item)}
            >
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {activeItem && (
        <div className="popup" onClick={() => setActiveItem(null)}>
          <div
            className="popup-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveItem(null)}
            >
              &times;
            </button>

            <img src={activeItem.image} alt={activeItem.name} />
            <h4>{activeItem.name}</h4>
            <p>{activeItem.description}</p>

            <button id="popup-btn">Order</button>
          </div>
        </div>
      )}
    </div>
  );
}
