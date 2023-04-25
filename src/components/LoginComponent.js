import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
    localStorage.setItem("role", responseData.role);
    localStorage.setItem("userId", responseData.userId);
    setEmail("");
    setPassword("");
    history.push("/user");
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
