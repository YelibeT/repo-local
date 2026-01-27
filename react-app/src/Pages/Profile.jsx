import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    navigate("/register");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center', padding: '20px' }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '50px' }}>👤</div>
        <h1>Welcome, {user.name}</h1>
        <p>📞 {user.phone}</p>
        <hr />
        <button 
          onClick={() => navigate("/order-success", { state: { phone: user.phone } })}
          style={{ marginBottom: '10px' }}>
          View My Orders
        </button>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}