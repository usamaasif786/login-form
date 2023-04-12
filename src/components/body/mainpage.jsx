import { useState } from "react";
import "../style/style.css";
import welcomelogo from "../style/welcome-logo.png"
import { useHistory, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [username, setUsername] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    // history.push("/");
    navigate("/");

  };

  // Retrieve the user's username from localStorage
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    setUsername(loginData.username);
  }

  return (
    <div className="main-page">
      <img src={welcomelogo} alt="Logo" />
      <h2>Welcome, {username}!</h2>
      <p>Here you'll find information about me and my projects.</p>
      <p>Feel free to browse around and contact me if you have any questions.</p>
      <button className="control" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default MainPage;
