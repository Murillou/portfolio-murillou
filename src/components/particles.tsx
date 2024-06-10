import Particles from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

export function ParticlesComponent(props) {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    const initializeParticles = async () => {
      await loadSlim(engine => {
        console.log('Particles Engine Loaded', engine);
        setInit(true);
      });
    };

    initializeParticles();
  }, []);

  const particlesLoaded = container => {
    console.log('Particles Loaded:', container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#1E2F97',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: '#FFFFFF',
        },
        links: {
          color: '#FFFFFF',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null; // Or return a loading spinner or placeholder
  }

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
}
