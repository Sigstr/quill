import React from "react";

import "./styles.css";

const Button = ({ children, className, onClick }) => (
  <button
    className={className}
    onClick={onClick ? onClick : () => alert("You clicked me")}
  >
    {children}
  </button>
);

export default Button;
