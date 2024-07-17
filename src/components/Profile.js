import React from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Name:{props.name}</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(1)}>SetCount</button>
    </div>
  );
};

export default Profile;
