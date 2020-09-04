import React from 'react';

export const Contact = () => {
  return (
    <section id='contact' class='section-nt'>
      <div class='contact'>
        <span
          data-aos='fade-up'
          data-aos-delay='300'
          class='heading highlight white'
        >
          Reach Out
        </span>

        <div class='row'>
          <div class='col-md-12 contact-col'>
            <h3
              class='number'
              data-aos='fade-up'
              data-aos-delay='400'
              style={{ fontSize: '3rem', fontWeight: '100' }}
            >
              {/* <p className='white card-description'>
                I'm currently looking for summer 2021 internship opportunities.
                Let talk!
              </p> */}
              <span className='white '>omar.shalash@mail.utoronto.ca</span>
            </h3>
            <div className='row p-5'>
              <div className='col'>
                <div class='icon-box'>
                  <a href='https://github.com/oshalash38'>
                    <i
                      class='fab fa-github fa-4x white'
                      data-aos='fade-up'
                      data-aos-delay='450'
                    ></i>
                  </a>
                  <p
                    class='username white'
                    data-aos='fade-up'
                    data-aos-delay='450'
                  >
                    oshalash38
                  </p>
                </div>
              </div>
              <div className='col'>
                <div class='icon-box'>
                  <a href='https://www.linkedin.com/in/omarshalash/'>
                    <i
                      class='fab fa-linkedin fa-4x'
                      data-aos='fade-up'
                      data-aos-delay='500'
                    ></i>
                  </a>
                  <p class='username' data-aos='fade-up' data-aos-delay='500'>
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
