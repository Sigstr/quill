import React from "react";

import "./styles.css";

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Card;
