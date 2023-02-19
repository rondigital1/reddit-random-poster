import React, { useState } from 'react';

export default function ImageEnlarger({ src, alt }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return(
    <div className="image-container">
      <img
        src={src}
        style={{ width: '100px', height: '100px' }}
        onClick={() => setIsEnlarged(true)}
        alt={alt}
      />
      {isEnlarged && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)' }}>
          <img
            src={src}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '80%', maxHeight: '80%' }}
            onClick={() => setIsEnlarged(false)}
            alt={alt}
          />
        </div>
      )}
    </div>
  );
}