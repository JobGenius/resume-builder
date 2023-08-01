// NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

interface NavBarProps {
  // Define any props you want to pass to the NavBar component
}

const NavBar: React.FC<NavBarProps> = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to track whether the user is logged in

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  };

  return (
    <nav>
      <div className="logo">
        {/* Insert your logo or brand name here */}
        NavBar
      </div>
      <div className="navigation">
        {/* Show different navigation items based on the login status */}
        {loggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      {/* Add any additional navigation elements, e.g., settings, etc. */}
    </nav>
  );
};

export default NavBar;
