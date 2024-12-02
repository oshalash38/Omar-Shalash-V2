import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pdf from './../files/Omar_Shalash_Resume.pdf';

export const Overlay = ({ match }) => {
  const location = useLocation();

  return (
    <Fragment>
      <Link
        className='top-left overlay-btn text-decoration-none'
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
        className='top-center overlay-btn text-decoration-none'
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
        className='top-right overlay-btn text-decoration-none'
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
        Resume
      </Link>

      {/* Disable the about me page until it is renovated. Uncomment when ready. */}

      {/* <Link
        className='bottom-left overlay-btn text-decoration-none'
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
      </Link> */}
      <Link
        className='bottom-right overlay-btn text-decoration-none'
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
