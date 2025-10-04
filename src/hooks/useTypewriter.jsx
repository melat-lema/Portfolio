import { useState, useEffect } from 'react';

const useTypewriter = (phrases, typeSpeed = 100, eraseSpeed = 50, pauseDelay = 1500) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Erase current phrase
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        } else {
          // Done erasing → move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Type current phrase
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        } else {
          // Done typing → pause, then start erasing
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? eraseSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typeSpeed, eraseSpeed, pauseDelay]);

  return displayedText;
};

export default useTypewriter;