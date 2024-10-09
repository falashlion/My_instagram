import React, { useState } from 'react';
import './ExplorePost.css';

const ExplorePost = () => {
  // Step 1: Mock data for images
  const [images, setImages] = useState([
    {
      id: 1,
      url: 'https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png',
      mobileUrl: 'https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png',
      alt: 'A picture of a sitting dog',
    },
    {
      id: 2,
      url: 'https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png',
      mobileUrl: 'https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png',
      alt: 'Smiling Girl',
    },
    {
      id: 3,
      url: 'https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png',
      mobileUrl: 'https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png',
      alt: 'Men Posing',
    },
    {
      id: 4,
      url: 'https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png',
      mobileUrl: 'https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png',
      alt: 'Two Puppies',
    },
  ]);

  return (
    <div className="container">
      <div className="text-center">
        <h2>Explore</h2>
        
      </div>

      {/* Step 2: Rounded scrollable container */}
      <div className="grid scrollable-container">
        {images.map((image) => (
          <div className="relative group rounded" key={image.id}>
            <img
              src={image.url}
              alt={image.alt}
              className="lg:block hidden w-full rounded-lg"
            />
            <img
              src={image.mobileUrl}
              alt={image.alt}
              className="lg:hidden block w-full rounded-lg"
            />
            <div className="absolute hover opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50"></div>
            <div className="absolute hover opacity-0">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePost;
