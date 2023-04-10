import { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./style.css";

const strengthLabels = ["weak", "medium", "strong"];

export const Login = () => {
  const [strength, setStrength] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const getStrength = (password) => {
    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] || "");
  };

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    getStrength(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      // Correct email and password, show success screen
      alert("Login successful!");
    } else {
      // Incorrect email and/or password, show error message
      setError("Incorrect email and/or password");
    }
  };

  return (
    <div className="login-card">
      <img src={logo} alt="Logo" />
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div id="spinner" className="spinner"></div>
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        {/* <div className={`bars ${strength}`}>
          <div></div>
        </div> */}
        {/* <div className="strength">{strength && <>{strength} password</>}</div> */}
        <button className="control" type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
};
