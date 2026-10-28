import React from 'react';
import ParticleBackground from './ParticleBackground.jsx';

export default function PageHeader({ title }) {
  return <header className="page-header">
    <ParticleBackground />
    <div className="container">
      <h1 data-reveal="">{title}</h1>
    </div>
  </header>;
}
