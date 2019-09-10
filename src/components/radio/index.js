import React from "react";

const Radio = props => {
  const { id, name, className, checked, disabled, onChange, onClick } = props;

  return (
    <input
      type="radio"
      id={id}
      className={className}
      name={name}
      checked={checked ? checked : false}
      disabled={disabled ? disabled : ""}
      onChange={onChange}
      onClick={e => {
        buttonRef.current.blur();
        return onClick(e);
      }}
    />
  );
};

export default Radio;
