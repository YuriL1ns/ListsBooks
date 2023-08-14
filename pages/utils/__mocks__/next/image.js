/* eslint-disable @next/next/no-img-element */
// Arquivo: __mocks__/next/image.js

import React from "react";

const MockImage = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

export default MockImage;
