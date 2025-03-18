import React from 'react';
import Team from '../images/Team.png';
import Navbar from '../Components/Navbar/Navbar';
import '../styles/Teams.css'; // Import the CSS file

const Teams = () => {
  return (
    <div className="teams-container">
      <Navbar />
      <img src={Team} alt="Team" className="teams-image" />
    </div>
  );
};

export default Teams;
