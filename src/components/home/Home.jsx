import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Scroll } from '../other/Scroll';

export const Home = () => {
  return (
    <section id='title' class='cd-section visible'>
      <div class='container-fluid w3-container w3-center w3-animate-opacity centered'>
        <ReactTypingEffect
          text='Omar Shalash'
          className='title'
          typingDelay={0}
        />

        <p class='description' data-aos='fade-up' data-aos-delay='600'>
          Second year computer science specialist at the University of Toronto
        </p>
      </div>
      {/* <Scroll /> */}
    </section>
  );
};
