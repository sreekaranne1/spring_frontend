import React from "react";

function UserComponent() {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Here are the Spots:</p>
      <ul>
        {cards.map((card) => (
          <li key={card.name}>
            <Link to={`/card/${card.name}`}>
              <h2>{card.name}</h2>
            </Link>
            <p>Created by: {card.user.firstName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserComponent;
