// src/components/Home.jsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // For animation
import '../styles/components/Home.css'; // Your custom CSS
import { useNavigate } from 'react-router-dom';
import { useBatAnimation } from '../hooks/useBatAnimation';

const Home = () => {

  const navigate = useNavigate();
  const batSpring = useBatAnimation();
    // Spring animations for the title, text, and button
    const spookyTextSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-50px)' }, // Start faded and move up
        delay: 200, // Delay for better effect
        config: { duration: 1000 } // Animation duration
    });

    const spookyParagraphSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-30px)' }, // Start faded and move up
        delay: 600, // Delay after the title
        config: { duration: 1000 }
    });

    const spookyButtonSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' }, // Start faded and move up
        delay: 1000, // Delay after paragraph
        config: { duration: 1000 }
    });
    const handleGetStartedClick = () => {
      // Trigger the bat animation and navigate to MainPage after the animation finishes
      setTimeout(() => {
        navigate('/main');
      }, 2000); // 2-second delay for bat animation
    };

    return (
        <div className="home-container">

            <animated.div style={batSpring} className="bat-container">
              <img src="/assets/bat.png" alt="Flying Bat" className="bat" />
            </animated.div>

            <animated.h1 style={spookyTextSpring} className="spooky-title">
                Welcome to the Haunted House
            </animated.h1>

            {/* Additional spooky content */}
            <animated.p style={spookyParagraphSpring} className="spooky-paragraph">
                Dare to enter the realm of darkness and explore the mysteries that await inside.
                Uncover hidden secrets, meet ghostly friends, and have the adventure of a lifetime.
            </animated.p>

            <animated.p style={spookyParagraphSpring} className="spooky-paragraph">
                Beware: Only the bravest souls can make it through. 
            </animated.p>

            {/* Animated Get Started button */}
            <animated.div style={spookyButtonSpring}>
        <button onClick={handleGetStartedClick} className="get-started-button">
          Get Started
        </button>
      </animated.div>
        </div>
    );
};

export default Home;
