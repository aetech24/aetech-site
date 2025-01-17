import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FramerMotionText = () => {
  const textArray = ['Web Development', 'App Development', 'Marketing'];
  const [index, setIndex] = React.useState(0);

  // Change text every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className="flex items-center">
      <div className="text-4xl lg:text-5xl font-extrabold">
        <AnimatePresence mode="wait">
          <motion.span
            key={textArray[index]}
            initial={{ opacity: 0, x: -300 }} // Slide from the left
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 200, // Strong spring effect for bounce
                damping: 2, // Lower damping for more noticeable bounces
                duration: 2,
              },
            }}
            exit={{
              opacity: 0,
              x: 300, // Slide out to the right
              transition: { duration: 0.5 },
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple"
          >
            {textArray[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FramerMotionText;
