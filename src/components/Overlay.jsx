import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pdf from './../files/MyResume.pdf';

export const Overlay = ({ match }) => {
  const location = useLocation();
  console.log(location);

  return (
    <Fragment>
      <Link
        className='top-left overlay-btn'
        to='/projects'
        style={
          location.pathname === '/about' ||
          location.pathname === '/projects' ||
          location.pathname === '/resume'
            ? { color: 'black' }
            : { color: 'white' }
        }
      >
        Projects
      </Link>
      <Link
        className='top-center overlay-btn '
        to='/'
        style={
          location.pathname === '/about' ||
          location.pathname === '/projects' ||
          location.pathname === '/resume'
            ? { color: 'black' }
            : { color: 'white' }
        }
      >
        Home
      </Link>
      <Link
        className='top-right overlay-btn'
        to={pdf}
        target='_blank'
        style={
          location.pathname === '/about' ||
          location.pathname === '/projects' ||
          location.pathname === '/resume'
            ? { color: 'black' }
            : { color: 'white' }
        }
      >
        Résumé
      </Link>
      <Link
        className='bottom-left overlay-btn'
        to='/about'
        style={
          location.pathname === '/about' ||
          location.pathname === '/projects' ||
          location.pathname === '/resume'
            ? { color: 'black' }
            : { color: 'white' }
        }
      >
        About me
      </Link>
      <Link
        className='bottom-right overlay-btn'
        to='/contact'
        style={
          location.pathname === '/about' ||
          location.pathname === '/projects' ||
          location.pathname === '/resume'
            ? { color: 'black' }
            : { color: 'white' }
        }
      >
        Contact
      </Link>
    </Fragment>
  );
};
