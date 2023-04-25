import React from "react";
import { Link } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    //make a api call
    //store the data in local storage
    //navigate to user page
  };
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

      <button>Login</button>
      <Link to="/signup">Click here to sign up</Link>
    </div>
  );
}

export default LoginComponent;
