import React, { useEffect } from 'react';
import { CourseCard } from './CourseCard';
import me from '../../images/ice.png';
import Rellax from 'rellax';
import { useMediaQuery } from 'react-responsive';

export const About = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isBigScreen = useMediaQuery({ query: '(max-width: 1200px)' });
  const isHugeScreen = useMediaQuery({ query: '(min-width: 1660px)' });
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  return (
    <section id='interests' data-aos='fade-up'>
      <div className='local-container' style={{ margin: '2rem 0 5rem 0' }}>
        <div
          className='decoration-square-xs rellax'
          data-rellax-speed='5'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          data-rellax-speed='3'
          className='decoration-square-sm rellax'
          style={{ backgroundColor: '', transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-md rellax'
          data-rellax-speed='1'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-md-2 rellax'
          data-rellax-speed='1'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-sm-2 rellax'
          data-rellax-speed='1'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-xs-2 rellax'
          data-rellax-speed='5'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-xs-3 rellax'
          data-rellax-speed='5'
          style={{ transform: 'rotate(45deg)' }}
        ></div>
        <div
          className='decoration-square-sm-3 rellax'
          data-rellax-speed='1'
          style={{ transform: 'rotate(45deg)' }}
        ></div>

        <div
          className='decoration-square-md-3 rellax'
          data-rellax-speed='1'
          style={{ transform: 'rotate(45deg)' }}
        ></div>

        <div className='row about-row'>
          <div className='col-xl-2'>
            <img src={me} alt='me' className='profile-img' />
            <span className='intrest-item arabic-name'> عمر شلش</span>
          </div>
          <div className='col-xl-10'>
            <div className='intrest-body container-fluid'>
              <h2 className='card-title'>Hey there!</h2>
              <p className='card-description'>
                {' '}
                I'm Omar. I was born in Cairo, Egypt, but I currently study in
                Toronto at UofT. I'm extremely passionate about creating
                impeccable software products and solutions. My intrest in
                artificial intelligence, machine learning and software
                engineering has been mushrooming for the last year and I cannot
                wait to get involved in the industry.
              </p>
              <p className='card-description'>
                In my personal time, I like to work out, play video games or
                take a walk and explore the city. My ultimate joy in life is to
                travel the world and discover and experience new places and
                cultures.
              </p>
              <p className='card-description'>
                These are some of the technologies I've been working with
                recently:
              </p>
              <ul>
                <li className='card-description'>Python | Java | JavaScript</li>
                <li className='card-description'>HTML & CSS</li>
                <li className='card-description'>
                  React & Redux | Express & Node.js | MongoDB
                </li>
                <li className='card-description'>Flutter & Dart</li>
              </ul>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className='row about-row'>
          <div className='col-xl-2'>
            {isBigScreen ? (
              <span
                className='heading highlight'
                style={{ float: 'left', marginTop: '20px' }}
              >
                Courses
              </span>
            ) : (
              <h2
                className='heading rotate-270 highlight'
                style={{ marginTop: '20px' }}
              >
                Courses
              </h2>
            )}
          </div>
          <div className='col-xl-10' data>
            {' '}
            <div
              className='course-body'
              style={isHugeScreen ? { paddingTop: '100px' } : null}
            >
              <div
                data-interval='false'
                id='carouselExampleIndicators'
                className='carousel slide'
              >
                <ol className='carousel-indicators'>
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to='0'
                    className='active'
                  ></li>
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to='1'
                  ></li>
                  <li
                    data-target='#carouselExampleIndicators'
                    data-slide-to='2'
                  ></li>
                </ol>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <CourseCard
                      title='Introduction to Computer Science'
                      where='University of Toronto'
                      description='Abstract data types and data structures for implementing them. Linked
        data structures. Encapsulation and information-hiding. Object-oriented
        programming. Specifications. Analyzing the efficiency of programs.
        Recursion.'
                    />
                    <CourseCard
                      title='Mathematical Expression and Reasoning for Computer Science'
                      where='University of Toronto'
                      description='Introduction to abstraction and rigour. Informal introduction to logical notation and reasoning. Understanding, using and developing precise expressions of mathematical ideas, including definitions and theorems. Structuring proofs to improve presentation and comprehension. General problem-solving techniques. Running time analysis of iterative programs. Formal definition of Big-Oh. Diagonalization, the Halting Problem, and some reductions. Unified approaches to programming and theoretical problems.'
                    />
                    <CourseCard
                      title='Software Design'
                      where='University of Toronto'
                      description='An introduction to software design and development concepts, methods, and tools using a statically-typed object-oriented programming language such as Java. Topics from: version control, unit testing, refactoring, object-oriented design and development, design patterns, advanced IDE usage, regular expressions, and reflection. Representation of floating-point numbers and introduction to numerical computation.'
                    />
                  </div>
                  <div className='carousel-item'>
                    <CourseCard
                      title='Introduction to the Theory of Computation'
                      where='Univerity of Toronto'
                      description='The application of logic and proof techniques to Computer Science. Mathematical induction; correctness proofs for iterative and recursive algorithms; recurrence equations and their solutions; introduction to automata and formal languages.'
                    />
                    <CourseCard
                      title='Computer Organization'
                      where='University of Toronto'
                      description='Computer structures, machine languages, instruction execution, addressing techniques, and digital representation of data. Computer system organization, memory storage devices, and microprogramming. Block diagram circuit realizations of memory, control and arithmetic functions. There are a number of laboratory periods in which students conduct experiments with digital logic circuits.'
                    />
                    <CourseCard
                      title='Linear Algebra I'
                      where='University of Toronto'
                      description="Systems of linear equations, matrix algebra, real vector spaces, subspaces, span, linear dependence and independence, bases, rank, inner products, orthogonality, orthogonal complements, Gram-Schmidt, linear transformations, determinants, Cramer's rule, eigenvalues, eigenvectors, eigenspaces, diagonalization."
                    />
                  </div>
                  <div className='carousel-item'>
                    <CourseCard
                      title='Calculus II'
                      where='University of Toronto'
                      description='Parametric equations and polar coordinates. Vectors, vector functions and space curves. Differential and integral calculus of functions of several variables. Line integrals and surface integrals and classic vector calculus theorems. Examples from life sciences and physical science applications.'
                    />
                    <CourseCard
                      title='LearnAI'
                      where='UofT AI'
                      description='There are hundreds of undergraduate students at the University of Toronto who are eager to learn how they can use machine learning to find meaningful solutions to hard problems. The program aims to satisfy this demand.
                      
LearnAI takes a different educational approach from the standard undergraduate curriculum. Through a carefully balanced combination of theory and practice, students are equipped with the knowledge and problem-solving skills necessary in the modern workforce.'
                    />
                    <div className='course-card'>
                      <h2 className='card-title'>Online Courses</h2>
                      <ul>
                        <li className='card-description'>
                          Machine Learning A-Z™: Hands-On Python & R In Data
                          Science - Udemy
                        </li>
                        <li className='card-description'>
                          The Complete 2020 Web Development Bootcamp - Udemy
                        </li>
                        <li className='card-description'>
                          Complete Flutter App Development Bootcamp with Dart -
                          Udemy
                        </li>
                        <li className='card-description'>
                          MERN Stack Front To Back: Full Stack React, Redux &
                          Node.js - Udemy
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='row about-row'
          style={isHugeScreen ? { marginTop: '150px' } : { marginTop: '50px' }}
        >
          <div className='col-xl-2'>
            {isBigScreen ? (
              <span
                className='heading highlight'
                style={{ float: 'left', marginTop: '20px' }}
              >
                More Me
              </span>
            ) : (
              <h2
                className='heading rotate-270 highlight'
                style={{ marginTop: '20px' }}
              >
                More Me
              </h2>
            )}
          </div>
          <div className='col-xl-10'>
            {' '}
            <div className='facts-body'>
              <h2 className='card-title'>
                These are some of the events & confrences I've attended
              </h2>
              <ul>
                <li className='card-description'>
                  MedHacks <span style={{ float: 'right' }}>2020</span>
                </li>
                <li className='card-description'>
                  CUTC <span style={{ float: 'right' }}>2020</span>
                </li>
                <li className='card-description'>
                  Hack the Valley IV{' '}
                  <span style={{ float: 'right' }}>2020</span>
                </li>
                <li className='card-description'>
                  Change the World MUN{' '}
                  <span style={{ float: 'right' }}>2016</span>
                </li>
              </ul>
              <h2 className='card-title'>
                These are some of my academic achievements
              </h2>
              <ul>
                <li className='card-description'>
                  I recieved the High Achiever Award for scoring the highest A
                  Level Physics mark in Cairo in the Cambridge 2018 session.{' '}
                </li>
                <li className='card-description'>
                  I ranked second place in my school for the Euclid Mathematics
                  Competition and placed in the 25th top percentile worldwide.{' '}
                </li>
              </ul>
              <h2 className='card-title'>
                These are some random facts about yours truly
              </h2>
              <ul>
                <li className='card-description'>
                  I speak English, Arabic and a little bit of German.
                </li>
                <li className='card-description'>
                  I used to play tennis, and although I stopped now, I still
                  enjoy watching competitive tennis.
                </li>
                <li className='card-description'>
                  My favorite show of all time is Game of Thrones. Valar
                  morghulis!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
