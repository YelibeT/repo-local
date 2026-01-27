import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); 

  const customerPhone = location.state?.phone;
  const isRegistered = localStorage.getItem("userInfo");

  useEffect(() => {
    if (!customerPhone) {
      setLoading(false);
      return;
    }
    const fetchMyOrders = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/orders/my-orders?phone=${customerPhone}`);
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [customerPhone]);

  // --- ACTIONS ---

  const handleFullEdit = (order) => {
    navigate("/menu", { 
      state: { 
        existingItems: order.items, 
        updatingOrderId: order._id 
      } 
    });
  };

  const handleQtyChange = (orderId, itemIndex, newQty) => {
    if (newQty < 1) return;
    setOrders(prev => prev.map(o => {
      if (o._id === orderId) {
        const newItems = [...o.items];
        newItems[itemIndex].quantity = newQty;
        return { ...o, items: newItems };
      }
      return o;
    }));
  };

  const saveLocalEdits = async (order) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/update/${order._id}`, {
        items: order.items
      });
      alert("Order quantities updated!");
      setEditingId(null);
    } catch (err) {
      alert("Failed to update quantities.");
    }
  };

  const handleCancel = async (orderId) => {
    if (!isRegistered) {
      alert("Please login to cancel.");
      navigate("/register");
      return;
    }
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        await axios.patch(`http://localhost:5000/api/orders/cancel/${orderId}`);
        setOrders(orders.map(o => o._id === orderId ? { ...o, status: 'cancelled' } : o));
      } catch (err) {
        alert("Cancel failed.");
      }
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  if (!customerPhone || orders.length === 0) {
    return (
      <div className="empty-state" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2>No Active Orders Found</h2>
        <p>We couldn't find any pending orders for this phone number.</p>
        <Link to="/menu" style={{ color: "#e67e22", fontWeight: "bold" }}>
          Go to Menu to Order
        </Link>
      </div>
    );
  }

  return (
    <div className="order-status-page" style={{ padding: "40px 20px", backgroundColor: "#fdfefe", minHeight: "90vh" }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>My Orders</h1>
        <p style={{ textAlign: 'center', color: '#7f8c8d', marginBottom: '30px' }}>
          Tracking for: <strong>{customerPhone}</strong>
        </p>
        
        {orders.map((order) => (
          <div key={order._id} style={{
            background: "#fff", padding: "25px", borderRadius: "15px", marginBottom: "25px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)", 
            borderLeft: order.status === 'pending' ? "6px solid #e67e22" : "6px solid #95a5a6"
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>👤 {order.customerName}</h3>
              <span style={{ 
                padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold',
                backgroundColor: order.status === 'pending' ? '#fff3e0' : '#f4f4f4',
                color: order.status === 'pending' ? '#e67e22' : '#7f8c8d'
              }}>
                {order.status.toUpperCase()}
              </span>
            </div>

            <div style={{ marginTop: '20px' }}>
              {order.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
                  <span style={{ flex: 1 }}>{item.name}</span>
                  
                  {editingId === order._id ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => handleQtyChange(order._id, idx, item.quantity - 1)} style={qtyBtn}>-</button>
                      <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => handleQtyChange(order._id, idx, item.quantity + 1)} style={qtyBtn}>+</button>
                    </div>
                  ) : (
                    <span style={{ color: '#666' }}>x{item.quantity}</span>
                  )}
                  
                  <span style={{ marginLeft: '20px', minWidth: '70px', textAlign: 'right' }}>
                    {item.price * item.quantity} birr
                  </span>
                </div>
              ))}
            </div>

            <hr style={{ border: '0.5px solid #eee', margin: '20px 0' }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>Total Amount:</span>
              <span>{order.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)} birr</span>
            </div>

            {order.status === "pending" && (
              <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-end' }}>
                {editingId === order._id ? (
                  <button onClick={() => saveLocalEdits(order)} style={saveBtn}>
                    Apply Changes
                  </button>
                ) : (
                  <>
                    <button onClick={() => setEditingId(order._id)} style={editBtn}>Edit Qty</button>
                    <button onClick={() => handleFullEdit(order)} style={addBtn}>Add More Items</button>
                    <button onClick={() => handleCancel(order._id)} style={cancelBtn}>Cancel Order</button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Button Styles
const qtyBtn = { padding: '2px 8px', borderRadius: '4px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' };
const saveBtn = { background: '#2ecc71', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const editBtn = { background: '#3498db', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer' };
const addBtn = { background: '#e67e22', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer' };
const cancelBtn = { background: '#fff', color: '#e74c3c', border: '1px solid #e74c3c', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer' };