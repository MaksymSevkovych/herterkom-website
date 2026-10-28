import React from 'react';

export default function CableMotif({ variant = 'fiber' }) {
  const connector = variant === 'connector';
  const source = `/assets/${connector ? 'AdobeStock_64146923-1_neu.png' : 'AdobeStock_32436978_72dpi-1.png'}`;
  const width = connector ? 544 : 960;
  const height = connector ? 275 : 720;

  return <div className={`cable-graphic cable-graphic--${variant}`}>
    <img className={connector ? 'connector-image' : 'hero-image'} src={source} alt={connector ? 'Technische Entwicklung und Fertigung' : 'Leuchtende Glasfasern eines optischen Übertragungsnetzes'} width={width} height={height} loading="eager" fetchPriority={connector ? undefined : 'high'}/>
    {!connector && <svg className="cable-continuation" aria-hidden="true" focusable="false" preserveAspectRatio="none" viewBox="0 0 1 720">
      <image href={source} width={width} height={height}/>
    </svg>}
  </div>;
}
