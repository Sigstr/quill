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
      onClick={e => {
        buttonRef.current.blur();
        return onClick(e);
      }}
    />
  );
};

export default Radio;
