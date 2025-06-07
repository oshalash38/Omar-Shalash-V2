import React, { Fragment, useEffect } from 'react';
import Rellax from 'rellax';

export const Resume = () => {
  useEffect(() => {
    const rellax = new Rellax('.fast', {
      speed: 10,
      center: false,
      //   wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    return () => {
      rellax.destroy();
    };
  }, []);
  return <Fragment></Fragment>;
};
