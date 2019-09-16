import React from "react";
import PropTypes from "prop-types";

import { ONYX, SLATE } from "../../foundations/Color"

import "./styles.css";

import Label from '../Label';

const Detail = ({ className, keyChildren, valueChildren }) => (
  <div className={`detail ${className}`}>
    <Label children={keyChildren} color={SLATE} />
    <Label children={valueChildren} color={ONYX} />
  </div>
);

Detail.propTypes = {
  className: PropTypes.string,
};

Detail.defaultProps = {
  className: ""
};

export default Detail;
