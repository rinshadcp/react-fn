import { useState } from "react";

const UserProfileCard = ({ name, location, district }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{district}</h3>
    </div>
  );
};

export default UserProfileCard;
