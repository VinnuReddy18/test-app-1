import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  return (
    <div className="App">
      <button onClick={toggleAnimations} className="toggle-button">
        {animationsEnabled ? 'Disable Animations' : 'Enable Animations'}
      </button>
      {animationsEnabled ? (
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ backgroundColor: '#ff6d6d' }}
          >
            <div className="layer-content">Welcome to Our Landing Page</div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ backgroundColor: '#ffaf40' }}
          >
            <div className="layer-content">Explore Our Features</div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{ backgroundColor: '#ffd700' }}
          >
            <div className="layer-content">Contact Us</div>
          </ParallaxLayer>
        </Parallax>
      ) : (
        <div className="static-content">
          <div className="layer-content">Welcome to Our Landing Page</div>
          <div className="layer-content">Explore Our Features</div>
          <div className="layer-content">Contact Us</div>
        </div>
      )}
    </div>
  );
}

export default App;