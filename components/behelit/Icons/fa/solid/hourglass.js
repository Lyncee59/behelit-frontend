// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFasHourglass = props => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64z" />
  </svg>
);

export const FasHourglass = withStyle(SvgFasHourglass, "FasHourglass", false);
