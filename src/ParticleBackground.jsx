import React, { useEffect, useRef } from 'react';

// The active values from Skymax's particles.conf.js, expressed in CSS pixels.
const PARTICLES = {
  number: 80,
  densityArea: 800,
  radius: 3,
  opacity: 0.1,
  lineDistance: 300,
  lineOpacity: 0.1,
  lineWidth: 1,
  speed: 6,
  grabDistance: 240,
  grabOpacity: 1,
  pushCount: 4,
};

// Bounds affect only unusually large canvases or repeated clicks, not normal headers.
const MAX_PARTICLES = 160;
const MAX_DPR = 2;
const INTERACTIVE_TARGETS = 'a, button, input, select, textarea, label, [role="button"], [role="link"], [contenteditable="true"]';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !host || !context) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;
    let visible = !document.hidden;
    let inView = typeof IntersectionObserver === 'undefined';
    let disposed = false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = null;
    let previousTime = null;
    let pointer = null;
    let resolutionQuery;
    const particles = [];

    function createParticle(position) {
      const radius = Math.random() * PARTICLES.radius;
      let x = position ? position.x : Math.random() * width;
      let y = position ? position.y : Math.random() * height;
      if (x > width - radius * 2) x -= radius;
      else if (x < radius * 2) x += radius;
      if (y > height - radius * 2) y -= radius;
      else if (y < radius * 2) y += radius;

      // particles.js uses a random [-.5, .5] vector * speed / 2 every frame.
      // At its original 60 fps this is at most 90 CSS px/s along each axis.
      const velocity = (PARTICLES.speed / 2) * 60;
      return { x, y, radius, vx: (Math.random() - 0.5) * velocity, vy: (Math.random() - 0.5) * velocity };
    }

    function drawLine(x1, y1, x2, y2, opacity) {
      context.globalAlpha = opacity;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

    function draw() {
      if (disposed || !width || !height) return;
      context.clearRect(0, 0, width, height);
      context.strokeStyle = '#ffffff';
      context.lineWidth = PARTICLES.lineWidth;
      const linkDistanceSquared = PARTICLES.lineDistance ** 2;
      const grabDistanceSquared = PARTICLES.grabDistance ** 2;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        if (pointer && !reducedMotion) {
          const distanceSquared = (particle.x - pointer.x) ** 2 + (particle.y - pointer.y) ** 2;
          if (distanceSquared < grabDistanceSquared) {
            const opacity = PARTICLES.grabOpacity * (1 - Math.sqrt(distanceSquared) / PARTICLES.grabDistance);
            drawLine(particle.x, particle.y, pointer.x, pointer.y, opacity);
          }
        }

        for (let next = index + 1; next < particles.length; next += 1) {
          const neighbor = particles[next];
          const distanceSquared = (particle.x - neighbor.x) ** 2 + (particle.y - neighbor.y) ** 2;
          if (distanceSquared < linkDistanceSquared) {
            const opacity = PARTICLES.lineOpacity * (1 - Math.sqrt(distanceSquared) / PARTICLES.lineDistance);
            drawLine(particle.x, particle.y, neighbor.x, neighbor.y, opacity);
          }
        }
      }

      context.fillStyle = '#ffffff';
      context.globalAlpha = PARTICLES.opacity;
      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    }

    function canAnimate() {
      return !disposed && !reducedMotion && visible && inView && width > 0 && height > 0;
    }

    function tick(time) {
      frame = null;
      if (!canAnimate()) return;
      // Discard long gaps so a delayed frame cannot fling points across the header.
      const seconds = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      for (const particle of particles) {
        particle.x += particle.vx * seconds;
        particle.y += particle.vy * seconds;

        // The original out_mode is "out": wrap at the opposite edge, no bouncing.
        if (particle.x - particle.radius > width) {
          particle.x = -particle.radius;
          particle.y = Math.random() * height;
        } else if (particle.x + particle.radius < 0) {
          particle.x = width + particle.radius;
          particle.y = Math.random() * height;
        }
        if (particle.y - particle.radius > height) {
          particle.y = -particle.radius;
          particle.x = Math.random() * width;
        } else if (particle.y + particle.radius < 0) {
          particle.y = height + particle.radius;
          particle.x = Math.random() * width;
        }
      }
      draw();
      frame = window.requestAnimationFrame(tick);
    }

    function syncAnimation() {
      if (canAnimate()) {
        if (frame === null) {
          previousTime = null;
          frame = window.requestAnimationFrame(tick);
        }
      } else {
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        previousTime = null;
      }
    }

    function resize() {
      if (disposed) return;
      const nextWidth = host.clientWidth;
      const nextHeight = host.clientHeight;
      const nextDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      if (nextWidth === width && nextHeight === height && nextDpr === dpr) return;

      if (width && height && nextWidth && nextHeight) {
        for (const particle of particles) {
          particle.x *= nextWidth / width;
          particle.y *= nextHeight / height;
        }
      }
      width = nextWidth;
      height = nextHeight;
      dpr = nextDpr;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      pointer = null;

      // Original density formula at DPR 1/2: area / 1000 * 80 / 800.
      const desiredCount = Math.min(MAX_PARTICLES, Math.ceil((width * height * PARTICLES.number) / (1000 * PARTICLES.densityArea)));
      if (particles.length > desiredCount) particles.splice(0, particles.length - desiredCount);
      while (particles.length < desiredCount) particles.push(createParticle());
      draw();
      syncAnimation();
    }

    function pointFromEvent(event) {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return null;
      const x = ((event.clientX - bounds.left) / bounds.width) * width;
      const y = ((event.clientY - bounds.top) / bounds.height) * height;
      return x >= 0 && x <= width && y >= 0 && y <= height ? { x, y } : null;
    }

    function movePointer(event) {
      if (reducedMotion || event.pointerType !== 'mouse') {
        pointer = null;
        return;
      }
      pointer = pointFromEvent(event);
    }

    function clearPointer() {
      pointer = null;
    }

    function startPointer(event) {
      if (event.pointerType !== 'mouse') clearPointer();
    }

    function pushParticles(event) {
      if (!canAnimate() || event.button !== 0 || event.target?.closest?.(INTERACTIVE_TARGETS)) return;
      const position = pointFromEvent(event);
      if (!position) return;
      // Keep four new points responsive even after many taps, without unbounded work.
      const excess = particles.length + PARTICLES.pushCount - MAX_PARTICLES;
      if (excess > 0) particles.splice(0, excess);
      for (let index = 0; index < PARTICLES.pushCount; index += 1) particles.push(createParticle(position));
    }

    function changeVisibility() {
      visible = !document.hidden;
      clearPointer();
      syncAnimation();
    }

    function changeMotion(event) {
      reducedMotion = event.matches;
      clearPointer();
      syncAnimation();
      draw();
    }

    function watchResolution() {
      resolutionQuery?.removeEventListener('change', changeResolution);
      resolutionQuery = window.matchMedia('(resolution: ' + (window.devicePixelRatio || 1) + 'dppx)');
      resolutionQuery.addEventListener('change', changeResolution);
    }

    function changeResolution() {
      resize();
      watchResolution();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const intersectionObserver = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      if (disposed) return;
      inView = entry.isIntersecting;
      if (!inView) clearPointer();
      syncAnimation();
    });
    intersectionObserver?.observe(host);

    host.addEventListener('pointermove', movePointer, { passive: true });
    host.addEventListener('pointerleave', clearPointer, { passive: true });
    host.addEventListener('pointercancel', clearPointer, { passive: true });
    host.addEventListener('pointerdown', startPointer, { passive: true });
    host.addEventListener('click', pushParticles, { passive: true });
    document.addEventListener('visibilitychange', changeVisibility);
    motionQuery.addEventListener('change', changeMotion);
    watchResolution();
    resize();

    return () => {
      disposed = true;
      if (frame !== null) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      host.removeEventListener('pointermove', movePointer);
      host.removeEventListener('pointerleave', clearPointer);
      host.removeEventListener('pointercancel', clearPointer);
      host.removeEventListener('pointerdown', startPointer);
      host.removeEventListener('click', pushParticles);
      document.removeEventListener('visibilitychange', changeVisibility);
      motionQuery.removeEventListener('change', changeMotion);
      resolutionQuery?.removeEventListener('change', changeResolution);
      particles.length = 0;
      canvas.width = 0;
      canvas.height = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
