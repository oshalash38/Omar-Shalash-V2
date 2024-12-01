import React, { Fragment, useState } from 'react';
import { ExploreButton } from './ExploreButton';
import AccessRequestModal from './AccessRequestModal';

export const ProjectCard = (props) => {
  const getRepoName = (githubLink) => {
    try {
      // Remove any trailing slash
      const sanitizedLink = githubLink.replace(/\/$/, '');

      // Use URL to parse the link
      const urlParts = new URL(sanitizedLink);

      // Split the pathname to extract the repo name
      const pathSegments = urlParts.pathname.split('/');

      // The last segment is the repo name
      if (pathSegments.length < 3) {
        throw new Error('Invalid GitHub repository link.');
      }

      return pathSegments[pathSegments.length - 1];
    } catch (error) {
      console.error('Error extracting repository name:', error.message);
      return null; // Return null if the link is invalid
    }
  };

  const cardId = props.link
    ? `modal-${getRepoName(props.link)}`
    : `modal-${props.title}`;

  return (
    <div className='col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch'>
      <div
        className='project-card d-flex flex-column'
        data-aos='fade-up'
        data-aos-delay={props.delay}
      >
        <img className='project-img' src={props.img} alt='img' />
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-description'>{props.description}</p>
        <div
          className='row mt-auto align-items-center'
          style={{ position: 'relative' }}
        >
          <div
            className='col-8 d-flex flex-wrap gap-2 project-tools align-items-start'
            style={{ padding: '5px', paddingBottom: 0 }}
          >
            <h4 style={{ marginBottom: 0 }}>
              {props.tools &&
                props.tools.map((tool, index) => {
                  return (
                    <Fragment key={index}>
                      <span
                        key={index}
                        className='badge rounded-pill text-bg-dark'
                      >
                        {tool}
                      </span>{' '}
                    </Fragment>
                  );
                })}
            </h4>
          </div>
          <div className='col-4' style={{ textAlign: 'center' }}>
            {' '}
            {props.isPrivate ? (
              <Fragment>
                <button
                  type='button'
                  className='btn no-outline-btn'
                  data-bs-toggle='modal'
                  data-bs-target={`#${cardId}`}
                  style={{ position: 'absolute', bottom: 0, padding: 0 }}
                >
                  <ExploreButton />
                </button>
                <AccessRequestModal
                  repoName={getRepoName(props.link)}
                  modalId={cardId}
                />
              </Fragment>
            ) : (
              <a
                target='_blank'
                href={props.link}
                rel='noopener noreferrer'
                style={{ position: 'absolute', bottom: 0, padding: 0 }}
              >
                <ExploreButton />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
