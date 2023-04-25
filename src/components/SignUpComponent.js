import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState('user');
  const history = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  }
  async function handleSubmit(event){
    event.preventDefault();
    const data = { firstName,lastName,email, password };

    const response = await fetch(`http://localhost:8080/api/signup?role=${selectedRole}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (id) {
        history.push("/");
      
    } else {
      alert("Sign Up failed, Please try again");
    }
    setEmail("");
    setPassword("");
   
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="role">Select a role:</label>
      <select name="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpComponent;
