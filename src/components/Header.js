import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="name-specialty">
        <h1>Proka Egor</h1>
        <p className="description">Frontend developer</p>
      </div>
      <div className="contact-info">
        <p>✉️ proka@example.com</p>
        <p>📍 Minsk, Belarus </p>
      </div>
    </div>
  );
};

export default Header;
