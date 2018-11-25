// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFasMusic = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z" />
  </svg>
);

export const FasMusic = withStyle(SvgFasMusic, "FasMusic", false);
