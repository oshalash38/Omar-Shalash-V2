import React, { useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import Rellax from 'rellax';
import ideas from '../../images/ideas.jpg';
import calendar from '../../images/calendar.jpg';
import meet from '../../images/meet.jpg';
import xo from '../../images/xo.jpg';
import code from '../../images/code.jpg';
import { useMediaQuery } from 'react-responsive';

export const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const config = {
    from: 'top-top',
    to: 'bottom-bottom',
    props: {
      '--opacity': {
        from: 0.1,
        to: 0.99
      }
    }
  };
  useEffect(() => {
    // const instance = basicScroll.create({
    //   elem: document.querySelector('.element'),
    //   from: 'bottom-bottom',
    //   to: 'top-top',
    //   direct: true,
    //   props: {
    //     '--r': {
    //       from: '0',
    //       to: '1turn'
    //     },
    //     '--tx': {
    //       to: '-1000px',
    //       from: '-200px'
    //     }
    //   }
    // });

    // instance.start();
    new Rellax('.slow', {
      speed: 0,
      center: false,
      //   wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax('.fast', {
      speed: 10,
      center: false,
      //   wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    var rellax = new Rellax('.rellax');
  }, []);
  return (
    <section id='projects'>
      {/* Title Container */}
      <div className='local-container'>
        <div className='row'>
          <div className='col-9' data-aos='fade-up' data data-aos-delay='300'>
            <h2 class='heading' style={{ textAlign: 'left' }}>
              <span className='highlight'>Projects</span>
            </h2>
          </div>
          <div className='col-3'>
            {!isTabletOrMobile && (
              <div data-aos='zoom-in-left'>
                <div
                  className='fixed-top decoration-square-md fast'
                  data-rellax-speed='-2'
                  data-rellax-xs-speed='-5'
                  data-rellax-mobile-speed='3'
                  data-rellax-tablet-speed='-8'
                  style={{
                    transform: 'rotate(45deg)'
                  }}
                ></div>
              </div>
            )}
            <div
              class='decoration-square-md-4 rellax'
              data-rellax-speed='1'
              style={{ transform: 'rotate(45deg)' }}
            ></div>
            {!isTabletOrMobile && (
              <div
                class='decoration-square-sm-4 rellax'
                data-rellax-speed='5'
                style={{ transform: 'rotate(45deg)' }}
              ></div>
            )}
          </div>
        </div>

        <div
          className='row'
          style={{ marginTop: '30px' }}
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <ProjectCard
            title='Idea Hut'
            img={ideas}
            tools={['React', 'NodeJS', 'Express', 'MongoDB', 'Redux']}
          />
          <ProjectCard
            title='Objectively Best Calendar'
            img={calendar}
            tools={['Java', 'Swing']}
          />
          <ProjectCard
            title='Link-Up'
            img={meet}
            tools={['Java', 'Android', 'Android Studio']}
          />
          <ProjectCard
            title='Tic-Tac-Toe'
            img={xo}
            tools={['Python', 'PyGame']}
          />
          <ProjectCard title='Personal Website' img={code} tools={['React']} />
          {/* <ProjectCard /> */}
        </div>
      </div>
    </section>
  );
};
