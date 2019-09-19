import React from "react";
import PropTypes from "prop-types";

import { ONYX, SLATE } from "../../foundations/Color";

import "./styles.css";

import Label from '../Label';

const Detail = ({ className, name, value }) => (
  <div className={`detail ${className}`}>
    <Label color={SLATE}>{name}</Label>
    <Label color={ONYX}>{value}</Label>
  </div>
);

Detail.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

Detail.defaultProps = {
  className: "",
  name: "",
  value: ""
};

export default Detail;
