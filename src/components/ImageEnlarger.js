import React, { useState } from 'react';
import './ImageWithText.css';

export default function ImageEnlarger({ src, alt }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          onClick={() => setIsEnlarged(true)}
          src={src}
        />
      </div>
        {isEnlarged && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, background: 'rgba(0, 0, 0, 0.7)' }}>
            <img
              src={src}
              style={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: 'none',
                maxHeight: 'none',
                objectFit: 'contain',
              }}
              onClick={() => setIsEnlarged(false)}
              alt="gallery"
            />
            <p className="text">{alt}</p>
          </div>
        )}
      </div>
  );
}
