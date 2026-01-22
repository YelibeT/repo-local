import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function Menu() {
  const [query, setQuery] = useState("");
  const [fasting, setFasting] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [activePopup, setActivePopup] = useState(null);

  // Fetch menu items from backend
  const fetchMenu = useCallback(async () => {
    try {
      setLoading(true);
      let url = "http://localhost:5000/api/menu/items";
      if (query) {
        url = `http://localhost:5000/api/menu/search?q=${encodeURIComponent(query)}`;
      }
      if (fasting) {
        url += query ? "&fasting=true" : "?fasting=true";
      }

      const result = await axios.get(url);
      setMenuItems(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [query, fasting]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchMenu();
    }, 300);
    return () => clearTimeout(timeout);
  }, [query, fasting, fetchMenu]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.menuItem === item._id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.menuItem === item._id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCart([
        ...cart,
        { menuItem: item._id, name: item.name, price: item.price, quantity: 1 },
      ]);
    }
    alert(`${item.name} added to cart!`);
  };
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((i) =>
          i.menuItem === id ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const placeOrder = async () => {
    if (!cart.length) return alert("Cart is empty!");

    const customerName = prompt("Enter your name:");
    const customerPhone = prompt("Enter your phone:");

    try {
      const res = await axios.post("http://localhost:5000/api/orders", {
        items: cart,
        customerName,
        customerPhone,
      });
      alert(res.data.message);
      setCart([]);
      setActivePopup(null);
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="menu-layout">
      <div className="menu-section">
        <form className="menu-search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            id="search-input"
            placeholder="search for menu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="dishes">
            {menuItems.map((item) => (
              <div key={item._id} className="food" id={`popup-${item._id}`}>
                <div onClick={() => setActivePopup(item._id)}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>

                {activePopup === item._id && (
                  <div className="popup" onClick={() => setActivePopup(null)}>
                    <div
                      className="popup-window"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button onClick={() => setActivePopup(null)}>×</button>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>{item.price} birr</p>
                      <button onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CART */}
      <div className="cart-section">
        <h2>Cart</h2>

        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.menuItem} className="cart-item">
                <span>{item.name}</span>
                <div>
                  <button onClick={() => decreaseQty(item.menuItem)}>-</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      setCart((prev) =>
                        prev.map((i) =>
                          i.menuItem === item.menuItem
                            ? { ...i, quantity: i.quantity + 1 }
                            : i,
                        ),
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span>{item.price * item.quantity} birr</span>
              </div>
            ))}

            <hr />
            <p>
              <strong>Total:</strong> {totalPrice} birr
            </p>
            <button onClick={placeOrder}>Place Order</button>
          </>
        )}
      </div>
    </div>
  );
}
