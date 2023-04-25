import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password };

    const response = await fetch("http://localhost:8080/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData == "User signed in successfully.") {
      localStorage.setItem("role", responseData.role);
      localStorage.setItem("userId", responseData.userId);
      localStorage.setItem("userName", responseData.firstName);
      history.push("/user");
    } else {
      alert("login failed, Please try again");
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <label for="uname">
        <b>Email</b>
      </label>
      <input
        type="email"
        placeholder="Enter Username"
        name="uname"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>
      <Link to="/signup">Click here to sign up</Link>
    </div>
  );
}

export default LoginComponent;
