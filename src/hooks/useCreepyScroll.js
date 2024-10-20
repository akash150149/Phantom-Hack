// src/hooks/useCreepyScroll.js
import { useState, useEffect } from 'react';

const useCreepyScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isGhostVisible, setGhostVisible] = useState(false);
    const [isBatsVisible, setBatsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setScrollPosition(currentScrollPos);

            // Show ghosts when the user scrolls down at least 200px
            if (currentScrollPos > 200) {
                setGhostVisible(true);
            } else {
                setGhostVisible(false);
            }

            // Show bats when the user scrolls past 500px
            if (currentScrollPos > 500) {
                setBatsVisible(true);
            } else {
                setBatsVisible(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollPosition, isGhostVisible, isBatsVisible };
};

export default useCreepyScroll;
