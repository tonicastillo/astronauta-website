import React from "react";

function Downloadicon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="1"
        d="M0 0L0 11"
        transform="translate(8)"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="1"
        d="M3 6.361l5 5 5-5"
      ></path>
      {
          props.linea
          ?
        <path
            fill="none"
            stroke="#000"
            strokeWidth="1"
            d="M0 0L16 0"
            data-name="Línea 12"
            transform="translate(0 14.5)"
        ></path>
      : null
      }
      
    </svg>
  );
}

export default Downloadicon;
