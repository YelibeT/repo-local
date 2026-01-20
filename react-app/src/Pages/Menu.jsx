import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function Menu() {
  const [query, setQuery] = useState("");
  const [fasting, setFasting] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const [count, setCount]=useState(0); 

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

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchMenu();
    }, 300);
    return () => clearTimeout(timeout);
  }, [query, fasting, fetchMenu]);

  // Add item to cart
  const addToCart = (item) => {
    const existing = cart.find((i) => i.menuItem === item._id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.menuItem === item._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { menuItem: item._id, name: item.name, price: item.price, quantity: 1 }]);
    }
    alert(`${item.name} added to cart!`);
  };

  // Place order
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
      setCart([]); // Clear cart
      setActivePopup(null); // Close popup
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    }
  };

  return (
    <div>
      <section>
        {/* Search bar + fasting filter */}
        <form onSubmit={(e) => e.preventDefault()} className="menu-search-form">
          <input
            type="text"
            id="search-input"
            placeholder="Search menu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button id="search-btn" type="button" onClick={fetchMenu}>
            Search
          </button>
        </form>

        <h1>Menu</h1>

        {loading ? (
          <p>Loading menu...</p>
        ) : (
          <div className="dishes">
            {["Non-fasting", "Fasting"].map((type) => (
              <div key={type} id={type} className={type === "Fasting" ? "fasting" : ""}>
                <h2>{type}</h2>
                {menuItems
                  .filter(
                    (item) =>
                      (type === "Fasting" && item.isFasting) ||
                      (type === "Non-fasting" && !item.isFasting)
                  )
                  .map((item) => (
                    <div key={item._id} className="food">
                      {/* Click to open popup */}
                      <div
                        className="food-trigger"
                        onClick={() => setActivePopup(item._id)}
                      >
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                      </div>

                      {/* Popup for this item */}
                      {activePopup === item._id && (
                        <div className="popup">
                          <div className="popup-window">
                            <button className="close" onClick={() => setActivePopup(null)}>
                              &times;
                            </button>
                            <h4>{item.name}</h4>
                            <p>{item.description || "No description"}</p>
                            <div className="btns">
                              <button id="btn" onClick={()=>setCount(count+1)}>+</button>
                              <button id="reset-btn" onClick={()=>setCount(0)} >Reset</button>
                              <button id="btn" onClick={()=>setCount(count-1)}>-</button>
                            </div>
                            <p>Price: {item.price} birr</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}

        {/* Cart footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <p>Items in cart: {cart.reduce((acc, i) => acc + i.quantity, 0)}</p>
            <button onClick={placeOrder}>Place Order</button>
          </div>
        )}
      </section>
    </div>
  );
}
