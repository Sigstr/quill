import React from "react";

import { ONYX, BASALT } from "../../foundations/Color"

import "./styles.css";

import Label from '../Label';

const Detail = ({ keyChildren, valueChildren }) => (
  <div class="detail">
    <Label children={keyChildren} color={BASALT} />
    <Label children={valueChildren} color={ONYX} />
  </div>
);

export default Detail;
