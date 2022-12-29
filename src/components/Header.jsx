import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {location.pathname === "/" ? (
        <div>
          <h1>Enter Your Name!</h1>
        </div>
      ) : (
        <div>
          <h2>{tasks.userName} active tasks: {tasks.count}</h2>
        </div>
      )}
    </div>
  );
}

export default Header;
