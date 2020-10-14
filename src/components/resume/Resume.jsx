import React, { Fragment, useEffect } from 'react';
import Rellax from 'rellax';

export const Resume = () => {
  useEffect(() => {
    new Rellax('.fast', {
      speed: 10,
      center: false,
      //   wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);
  return <Fragment></Fragment>;
};
