import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [isLogin, setIsLogin] = useState(false); // State to toggle
  const [formData, setFormData] = useState({ name: "", phone: "" });
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    
    try {
      const { data } = await axios.post(`http://localhost:5000${endpoint}`, formData);
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Redirect logic remains the same
      if (location.state?.cart) {
        navigate("/checkout", { state: { cart: location.state.cart } });
      } else {
        navigate("/profile");
      }
    } catch (err) {
      alert(isLogin ? "Login failed" : "Registration failed");
    }
  };

  return (
    <div className="auth-container" style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2>{isLogin ? "Welcome back" : "Become Our Customer"}</h2>
      
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input 
            type="text" 
            placeholder="Full Name" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
            style={inputStyle}
          />
        )}
        <input 
          type="tel" 
          placeholder="Phone Number" 
          onChange={(e) => setFormData({...formData, phone: e.target.value})} 
          required 
          style={inputStyle}
        />
        <button type="submit" style={btnStyle}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        {isLogin ? "New here?" : "Been here before?"}{" "}
        <span 
          onClick={() => setIsLogin(!isLogin)} 
          style={{ color: '#e67e22', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? "Create an account" : "Login here"}
        </span>
      </p>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '10px', background: '#e67e22', color: '#fff', border: 'none', cursor: 'pointer' };