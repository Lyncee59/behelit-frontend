// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFasWindowMaximize = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v84z" />
  </svg>
);

export const FasWindowMaximize = withStyle(
  SvgFasWindowMaximize,
  "FasWindowMaximize",
  false
);
