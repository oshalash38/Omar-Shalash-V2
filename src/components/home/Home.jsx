import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const Home = () => {
  const maxNumber = Math.pow(10, 1000); // max positive number

  return (
    <section id='title' className='cd-section visible'>
      <div className='container-fluid w3-container w3-center w3-animate-opacity centered'>
        <ReactTypingEffect
          text='Omar Shalash'
          className='title'
          typingDelay={0}
          eraseDelay={100000000}
        />

        <p className='description' data-aos='fade-up' data-aos-delay='600'>
          Computer science graduate from the University of Toronto
        </p>
      </div>
      {/* <Scroll /> */}
    </section>
  );
};
