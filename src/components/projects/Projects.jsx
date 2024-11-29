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
  // const isGettingSmall = 0;
  const config = {
    from: 'top-top',
    to: 'bottom-bottom',
    props: {
      '--opacity': {
        from: 0.1,
        to: 0.99,
      },
    },
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
      horizontal: false,
    });
    new Rellax('.fast', {
      speed: 10,
      center: false,
      //   wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
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
              transform: 'rotate(45deg)',
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
            description='Implemented a web application that allows creative individuals to propose technological ideas allowing tech talents to implement such ideas. A perfect place for motivated developers looking for project ideas and innovative individuals lacking the technical skills.'
            link='https://github.com/oshalash38/Idea-Hut'
            delay={0}
          />
          <ProjectCard
            title='Objectively Best Calendar'
            img={calendar}
            tools={['Java', 'Swing']}
            description='Along with four teammates, we implement a fully functional desktop calendar application. Personally worked on various features including but not limited to creating, editing and deleting events and memos. This project was assigned for the CSC207 class.'
            link='https://github.com/oshalash38/Objectively-Best-Calendar'
            delay={100}
          />
          <ProjectCard
            title='Link-Up'
            img={meet}
            tools={['Java', 'Android', 'Android Studio']}
            description='Project for HackTheValley IV. I primarily developed the front-end including all the main screens. This project was merely an exploration of mobile app development. I experimented many unfamiliar technologies such as Firebase functions and Android Studio.'
            link='https://github.com/oshalash38/Link-Up'
            delay={200}
          />
          <ProjectCard
            title='Tic-Tac-Toe'
            img={xo}
            tools={['Python', 'PyGame']}
            description='A basic tic-tac-toe desktop game. Extremely intuitive interface where players take turns placing their move on a 3x3 grid. Developed for practicing Python in high school Computer Science class.'
            delay={300}
          />
          <ProjectCard
            title='Personal Website'
            img={code}
            tools={['React']}
            description="This very website you are on right now. It's the second iteration of building a personal website/portofolio. Used React primarily to build it with some good old HTML, CSS and JS(X)."
            delay={400}
            link='https://github.com/oshalash38/Omar-Shalash-V2'
          />
          {/* <ProjectCard /> */}
        </div>
      </div>
    </section>
  );
};
