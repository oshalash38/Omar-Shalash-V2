import React, { useEffect, Fragment } from 'react';
import { Scroll } from '../other/Scroll';
import $ from 'jquery';

export const InterestsCloud = () => {
  return (
    // <div>
    //   <span className='intrest-item intrest-item-1'>
    //     Artificial Intelligence
    //   </span>
    //   <br />
    //   <span className='intrest-item intrest-item-2 '>Software Engineering</span>
    //   <br />
    //   <span className='intrest-item intrest-item-3'>Working Out</span>
    //   <br />
    //   <span className='intrest-item intrest-item-4'>Machine Learning</span>
    //   <br />
    //   <span className='intrest-item intrest-item-5'>
    //     Full Stack Development
    //   </span>
    //   <br />
    //   <span className='intrest-item intrest-item-6'>Gaming</span>
    //   <br />
    //   <span className='intrest-item intrest-item-7'>Innovation</span>
    //   <br />
    //   <span className='intrest-item intrest-item-8'>Travelling</span>
    //   <br />
    // </div>
    <Fragment>
      <div className='row interest-row'>
        <div className='col-md-4 left-aligned'>
          <span className='intrest-item'>Artificial Intelligence </span>
        </div>
        <div className='col-md-4'>
          <span className='intrest-item'>Machine Learning</span>
        </div>
        <div className='col-md-4 right-aligned'>
          <span className='intrest-item'>Software Engineering</span>
        </div>
      </div>
      <div className='row interest-row'>
        <div className='col-md-4 left-aligned'>
          <span className='intrest-item left-aligned'>Innovating </span>
        </div>
        <div className='col-md-4'>
          <span className='intrest-item'>Full Stack</span>
        </div>
        <div className='col-md-4 right-aligned'>
          <span className='intrest-item'>Working Out</span>
        </div>
      </div>
      <div className='row interest-row'>
        <div className='col-md-4 left-aligned'>
          <span className='intrest-item'> Travelling</span>
        </div>
        <div className='col-md-4'>
          <span className='intrest-item'>Gaming</span>
        </div>
        <div className='col-md-4 right-aligned'>
          <span className='intrest-item'>Tennis</span>
        </div>
      </div>
    </Fragment>
  );
};
