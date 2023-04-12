import { ChangeEvent, useState } from "react";
import logo from "../style/logo.svg";
import loginlogo from "../style/login-logo.png"
import "../style/style.css";
import MainPage from "../body/mainpage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useNavigate
} from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const signups = JSON.parse(localStorage.getItem("signupData"));
    let matchFound = false;
  
    if (signups) {
      for (let i = 0; i < signups.length; i++) {
        const signup = signups[i];
        if (email === signup.email && password === signup.password) {
          // Correct email and password, show success screen
          alert("Login successful!");
          matchFound = true;
          setAuthenticated(true);
          break;
        }
      }
    }
    if (!matchFound) {
      // Incorrect email and/or password, show error message
      setError("Incorrect email and/or password");
    }
  };

  if (authenticated) {
    // history.push("/main");
    navigate("/mainpage");
    return <MainPage />;
  }

  return (
    <div className="login-card">
      <img src={loginlogo} alt="Logo" />
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="username">
          <input
            id="email"
            autoComplete="on"
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
          id="password"
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="control" type="submit">
          LOG IN
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link">
          Sign up
        </Link>
      </p>
    </div>
  );
};
