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
  const isGettingSmall = useMediaQuery({ query: '(max-width: 1090px)' });

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
      <div data-aos='fade-up' className='local-container-2'>
        {!isGettingSmall && (
          <div
            className='decoration-square-lg rellax'
            data-rellax-speed='1'
            style={{
              transform: 'rotate(45deg)'
            }}
          ></div>
        )}

        <div
          class='decoration-square-md-4 rellax'
          data-rellax-speed='3'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          class='decoration-square-sm-4 rellax'
          data-rellax-speed='5'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div className='row'>
          <div className='col-9' data-aos='fade-up' data data-aos-delay='300'>
            <h2 class='heading' style={{ textAlign: 'left' }}>
              <span className='highlight'>Projects</span>
            </h2>
          </div>
          <div className='col-3'></div>
        </div>

        <div className='row' style={{ marginTop: '30px' }} data-aos='fade-up'>
          <ProjectCard
            title='Idea Hut'
            img={ideas}
            tools={['React', 'NodeJS', 'Express', 'MongoDB', 'Redux']}
            delay={600}
          />
          <ProjectCard
            title='Objectively Best Calendar'
            img={calendar}
            tools={['Java', 'Swing']}
            delay={700}
          />
          <ProjectCard
            title='Link-Up'
            img={meet}
            tools={['Java', 'Android', 'Android Studio']}
            delay={800}
          />
          <ProjectCard
            title='Tic-Tac-Toe'
            img={xo}
            tools={['Python', 'PyGame']}
            delay={0}
          />
          <ProjectCard
            title='Personal Website'
            img={code}
            tools={['React']}
            delay={100}
          />
          {/* <ProjectCard /> */}
        </div>
      </div>
    </section>
  );
};
