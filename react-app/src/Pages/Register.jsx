import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/register", formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Registration Successful!");
      navigate("/menu");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };
  

  return (
    <div className="auth-container" style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} />
        <input type="tel" placeholder="Phone Number" required onChange={(e) => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
        <input type="password" placeholder="Password" required onChange={(e) => setFormData({...formData, password: e.target.value})} style={inputStyle} />
        <button type="submit" style={btnStyle}>Sign Up</button>
      </form>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' };
const btnStyle = { width: '100%', padding: '10px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };