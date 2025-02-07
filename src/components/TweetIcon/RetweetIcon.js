import React from "react";
import styled from "styled-components";

const Icon = 
    // <path
    //   fill="currentColor"
      "M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 0 0 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5z"
  


const RetweetIcon = ({ size= 24, width, isToggled }) => (
  <Svg
  width={size} height={size} viewBox="0 0 24 24"
  >
    <path
      d= {Icon}
      fill = {isToggled ? "rgb(23, 191, 99)" : undefined}
    />
  </Svg>
);

const Svg = styled.svg`
  display: block;
  position:absolute;
  z-index:3;
`;

export default RetweetIcon;


