import { ChangeEvent, useState } from "react";
import logo from "../style/logo.svg";
import "../style/style.css"

const strengthLabels = ["weak", "medium", "strong"];

export const Signup = () => {
  const [strength, setStrength] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getStrength = (password) => {
    console.log(password);

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

  // const handleChange = (event) => getStrength(event.target.value);
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
      getStrength(event.target.value);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   const storedEmail = localStorage.getItem("email");
  //   if (storedEmail === email) {
  //     alert("Email address already exists!"); // show an error message to the user
  //     return;
  //   }
  
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  //   console.log("Form data submitted!");
  //   setEmail("");
  //   setPassword("");
  //   setStrength("");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("signupData")) || [];
    const storedEmails = storedData.map((data) => data.email);
    if (storedEmails.includes(email)) {
      alert("Email address already exists!"); // show an error message to the user
      return;
    }

    const formData = { email, password };
    const updatedData = [...storedData, formData];
    localStorage.setItem("signupData", JSON.stringify(updatedData));

    console.log("Form data submitted!");
    setEmail("");
    setPassword("");
    setStrength("");
  };

  return (
    <div className="login-card">
      <img src={logo} alt="Logo" />
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <div id="spinner" className="spinner"></div>
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <button className="control" type="submit">
          JOIN NOW
        </button>
      </form>
    </div>
  );
};
