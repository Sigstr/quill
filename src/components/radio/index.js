import React from "react";

const Radio = props => {
  const { id, name, className, checked, disabled, onClick } = props;

  return (
    <input
      type="radio"
      id={id}
      className={className}
      name={name}
      checked={checked ? checked : false}
      disabled={disabled ? disabled : ""}
      onClick={onClick ? onClick : () => alert("You clicked me")}
    />
  );
};

export default Radio;
