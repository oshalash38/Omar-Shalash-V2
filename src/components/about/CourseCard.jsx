import React from 'react';
import { checkPropTypes } from 'prop-types';

export const CourseCard = props => {
  return (
    <div className='course-card'>
      <h2 className='card-title'>
        {props.title}
        <span className='card-description adjusted-span'>{props.where}</span>
      </h2>

      <p className='card-description'>{props.description}</p>
    </div>
  );
};
