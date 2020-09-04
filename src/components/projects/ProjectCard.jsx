import React, { Fragment } from 'react';
import { ExploreButton } from './ExploreButton';

export const ProjectCard = props => {
  return (
    <div
      className='col-sm-12 col-md-6 col-lg-4 project-card'
      data-aos='fade-up'
      data-aos-delay={props.delay}
    >
      <img className='project-img' src={props.img} alt='img' />
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
      <div className='row'>
        <div className='col-8' style={{ padding: '5px' }}>
          <h4>
            {props.tools &&
              props.tools.map((tool, index) => {
                return (
                  <Fragment>
                    <span key={index} class='badge badge-pill badge-dark'>
                      {tool}
                    </span>{' '}
                  </Fragment>
                );
              })}
          </h4>
        </div>
        <div className='col-4'>
          {' '}
          <ExploreButton />
        </div>
      </div>
    </div>
  );
};
