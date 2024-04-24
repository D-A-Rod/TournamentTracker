import React from "react";
import { useSelector } from "react-redux";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <div>
        <h1>2024 Florida Classic</h1>
      </div>
    </div>
  );
};

export default Home;
