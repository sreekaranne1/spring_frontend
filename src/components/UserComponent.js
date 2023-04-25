import React, { useState } from "react";

function UserComponent() {
  const [cards, setCards] = useState(null);
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("userName");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`localhost:8080/api/touristspot`);
      const data = await response.json();
      setCards(data);
    };
    fetchData();
  }, [userId, role]);

  if (!cards) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Welcome, {name}!</h1>
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
