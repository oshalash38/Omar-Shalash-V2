import React from 'react';

export const Contact = () => {
  return (
    <section id='contact' className='section-nt'>
      <div className='contact'>
        <span
          data-aos='fade-up'
          data-aos-delay='300'
          className='heading highlight white'
        >
          Reach Out
        </span>

        <div className='row'>
          <div className='col-md-12 contact-col'>
            <h3
              className='number'
              data-aos='fade-up'
              data-aos-delay='400'
              style={{ fontSize: '3rem', fontWeight: '100' }}
            >
              {/* <p className='white card-description'>
                I'm currently looking for summer 2021 internship opportunities.
                Let talk!
              </p> */}
              <span className='white '>omarshalash@live.com</span>
            </h3>
            <div className='row p-5'>
              <div className='col'>
                <div className='icon-box'>
                  <a href='https://github.com/oshalash38'>
                    <i
                      className='fab fa-github fa-4x white'
                      data-aos='fade-up'
                      data-aos-delay='450'
                    ></i>
                  </a>
                  <p
                    className='username white'
                    data-aos='fade-up'
                    data-aos-delay='450'
                  >
                    oshalash38
                  </p>
                </div>
              </div>
              <div className='col'>
                <div className='icon-box'>
                  <a href='https://www.linkedin.com/in/omarshalash/'>
                    <i
                      className='fab fa-linkedin fa-4x'
                      data-aos='fade-up'
                      data-aos-delay='500'
                    ></i>
                  </a>
                  <p
                    className='username'
                    data-aos='fade-up'
                    data-aos-delay='500'
                  >
                    omarshalash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
