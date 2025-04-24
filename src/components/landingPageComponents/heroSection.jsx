import React from 'react';
import TypingEffect from '../TypingHero';

function heroSection() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w capitalize">
            <h1 className="mb-5 text-5xl font-bold">Your Solution to the Web</h1>
            <h2 className="mb-5 text-2xl font-bold">
              Don't Let Code Stop You
            </h2>
            <div className="mb-5 ">
            <TypingEffect />
            </div>
            <p className="mb-5">Get your next project off the ground today</p>
            <div>
            <button className="btn btn-primary text-xl rounded-lg p-9 md:mx-3 md:my-0 my-4">
              Get In Touch Today
            </button>
            <button className="btn btn-accent text-xl rounded-lg p-9 md:mx-3 md:my-0 my-4">
              Get In Touch Today
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroSection;