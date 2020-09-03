import React from 'react';

export const Square = props => {
  return (
    <div
      data-rellax-speed='7'
      className={props.className}
      style={{ backgroundColor: props.color }}
    ></div>
  );
};
