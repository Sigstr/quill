import React from "react";

import { ONYX, SLATE } from "../../foundations/Color"

import "./styles.css";

import Label from '../Label';

const Detail = ({ keyChildren, valueChildren }) => (
  <div class="detail">
    <Label children={keyChildren} color={SLATE} />
    <Label children={valueChildren} color={ONYX} />
  </div>
);

export default Detail;
