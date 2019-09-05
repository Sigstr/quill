import React from "react";

export const Button = props => {
  const { children, className, onClick } = props;

  return (
    <button
      className={className}
      onClick={onClick ? onClick : () => alert("You clicked me")}
    >
      {children}
    </button>
  );
};
