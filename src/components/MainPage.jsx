import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../styles/components/MainPage.css';

const MainPage = () => {
  // State to hold the text as it's being typed
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  // Full content to display
  const fullText = `In the shadows, where light dares not tread, ancient forces gather, waiting for their moment. 
They whisper your name, beckoning you to step deeper into the unknown. 
But beware, for the deeper you go, the harder it is to escape. 
The air grows thick, cold fingers of dread wrap around your spine. 
Do you feel it? That chill running down your neck? You're not alone. 
Eyes you cannot see, watching from every corner. 
Footsteps echo, though no one follows. 
Time distorts here, bending reality to its will, trapping those who stray. 
The ground beneath you shifts, groaning under the weight of forgotten souls. 
Tread carefully, for each step may awaken something best left undisturbed. 
A soft voice calls out, but not all voices should be answered... Will you heed the warning, or will curiosity pull you further into the abyss?
`;

  // Use useEffect to simulate the typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + fullText[index]); // Append the next character
        setIndex(index + 1); // Move to the next character
      }, 50); // Speed of the typing effect (50ms per character)
      return () => clearTimeout(timeoutId); // Cleanup timeout on re-render
    }
  }, [index, fullText]);

  return (
    <Parallax pages={3} style={{ top: '0', left: '0' }}>
      {/* Background layer */}
      <ParallaxLayer 
        offset={0} 
        speed={0.5} 
        style={{ backgroundColor: '#1a1a1a', height: '100vh' }}>
      </ParallaxLayer>

      {/* Mist layers */}
      <div className="mist-layer"></div>
      <div className="mist-layer mist-layer-2"></div>
      <div className="mist-layer mist-layer-3"></div>

      {/* Creepy Title Layer */}
      <ParallaxLayer offset={0} speed={1.0}>
        <div className="main-page">
          <h1 className="creepy-heading">Welcome to the Realm of Shadows</h1>
        </div>
      </ParallaxLayer>

      {/* Creepy Description Layer with typewriter effect */}
      <ParallaxLayer offset={1} speed={0.8}>
        <div className="content">
          <p className="creepy-text">
            {text} {/* This will display the text as it's typed */}
          </p>
        </div>
      </ParallaxLayer>
      
    </Parallax>
  );
};

export default MainPage;
