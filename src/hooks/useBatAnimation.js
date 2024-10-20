// src/hooks/useBatAnimation.js
import { useSpring } from '@react-spring/web';

export const useBatAnimation = () => {
  const batSpring = useSpring({
    from: { transform: 'translateX(-100%)' }, // Start from off-screen
    to: { transform: 'translateX(100%)' }, // Fly across to the right
    config: { duration: 2000 }, // Duration of the bat animation (2 seconds)
  });

  return batSpring;
};
