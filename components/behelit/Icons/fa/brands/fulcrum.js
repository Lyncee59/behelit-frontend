// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFabFulcrum = props => (
  <svg viewBox="0 0 269.66 512" {...props}>
    <path d="M70.75 164.14l-35.38 43.55L0 164.14l35.38-43.55 35.37 43.55zM119.23 0L98.69 198.18 47.72 256l50.98 57.82L119.23 512V300.89L78.15 256l41.08-44.89V0zm79.67 164.14l35.38 43.55 35.38-43.55-35.38-43.55-35.38 43.55zm-48.48 46.97L191.5 256l-41.08 44.89V512l20.54-198.18L221.94 256l-50.98-57.82L150.42 0v211.11z" />
  </svg>
);

export const FabFulcrum = withStyle(SvgFabFulcrum, "FabFulcrum", false);
