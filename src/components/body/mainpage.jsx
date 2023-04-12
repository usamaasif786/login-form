import React from "react";

function MainPage() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Here you'll find information about me and my projects.</p>
      <p>Feel free to browse around and contact me if you have any questions.</p>
    </div>
  );
}

export default MainPage;
// import { useState } from "react";
// import logo from "../style/logo.svg";
// import "../style/style.css";
// import { useHistory } from "react-router-dom";

// const MainPage = () => {
//   const [username, setUsername] = useState("");
//   const history = useHistory();

//   const handleLogout = () => {
//     localStorage.removeItem("loginData");
//     history.push("/");
//   };

//   // Retrieve the user's username from localStorage
//   const loginData = JSON.parse(localStorage.getItem("loginData"));
//   if (loginData) {
//     setUsername(loginData.username);
//   }

//   return (
//     <div className="main-page">
//       <img src={logo} alt="Logo" />
//       <h2>Welcome, {username}!</h2>
//       <button className="control" onClick={handleLogout}>
//         LOGOUT
//       </button>
//     </div>
//   );
// };

// export default MainPage;
